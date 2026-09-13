import { describe, expect, it } from 'vitest'
import {
  assessAxFieldEvidence,
  assessAxSubtree,
  assessFocusTraversal,
  assessMixedDirectionCaptures,
  assessMixedDirectionFields,
  assessSidebarDomState,
  observeFixtureMutationRequests,
  recordMixedDirectionCapture,
} from '../scripts/browser-evidence-helpers.mjs'

const ax = (backendDOMNodeId, role, name, childIds = [], extra = {}) => ({
  backendDOMNodeId, nodeId: String(backendDOMNodeId), childIds,
  role: { value: role }, name: { value: name }, ...extra,
})

describe('exact DOM to AX association', () => {
  it('accepts only the requested root subtree and required descendants', () => {
    const nodes = [ax(10, 'table', 'Batch preview', ['11', '12']), ax(11, 'columnheader', 'Title'), ax(12, 'cell', 'Atlas')]
    expect(assessAxSubtree(nodes, { backendNodeId: 10, rootRoles: ['table'], rootName: 'Batch preview', descendantRoles: ['columnheader', 'cell'] }).ok).toBe(true)
    expect(assessAxSubtree(nodes, { backendNodeId: 99, rootRoles: ['table'], rootName: 'Batch preview', descendantRoles: ['columnheader', 'cell'] }).ok).toBe(false)
    expect(assessAxSubtree([ax(10, 'table', 'Batch preview'), ax(90, 'columnheader', 'Title'), ax(91, 'cell', 'Atlas')], { backendNodeId: 10, rootRoles: ['table'], rootName: 'Batch preview', descendantRoles: ['columnheader', 'cell'] }).ok).toBe(false)
    expect(assessAxSubtree([ax(10, 'region', 'Batch preview', ['11', '12']), ax(11, 'columnheader', 'Title'), ax(12, 'cell', 'Atlas')], { backendNodeId: 10, rootRoles: ['table'], rootName: 'Batch preview', descendantRoles: ['columnheader', 'cell'] }).ok).toBe(false)
  })
})

describe('exact card field AX evidence', () => {
  const nodes = [
    ax(10, 'list', 'Mobile review cards', ['11']),
    ax(11, 'listitem', 'Example', ['12']),
    ax(12, 'definition', '', ['13']),
    ax(13, 'StaticText', '910001'),
  ]
  const contract = { rootBackendNodeId: 10, fieldBackendNodeId: 12, valueBackendNodeId: 13, value: '910001' }

  it('requires the exact exposed field and value inside the selected active list subtree', () => {
    expect(assessAxFieldEvidence(nodes, contract).ok).toBe(true)
    expect(assessAxFieldEvidence(nodes, { ...contract, fieldBackendNodeId: 99 }).ok).toBe(false)
  })

  it('rejects the old ignored inline-bdi evidence and unrelated matching item text', () => {
    const ignoredBdi = nodes.map((node) => Number(node.backendDOMNodeId) === 12 ? { ...node, ignored: true, role: { value: 'none' } } : node)
    expect(assessAxFieldEvidence(ignoredBdi, contract).ok).toBe(false)
    const unrelated = [...nodes.slice(0, 3), ax(14, 'StaticText', '910001')]
    expect(assessAxFieldEvidence(unrelated, { ...contract, valueBackendNodeId: 14 }).ok).toBe(false)
  })
})

describe('browser-observed modal traversal', () => {
  const valid = {
    first: 'close', last: 'last-action',
    events: [
      { type: 'focusin', target: 'last-action', inside: true },
      { type: 'keydown', key: 'Tab', shiftKey: false, target: 'last-action', inside: true },
      { type: 'focusin', target: 'close', inside: true },
      { type: 'focusin', target: 'close', inside: true },
      { type: 'keydown', key: 'Tab', shiftKey: true, target: 'close', inside: true },
      { type: 'focusin', target: 'last-action', inside: true },
    ],
  }
  it('requires immediate boundary results and no intermediate focus escape', () => {
    expect(assessFocusTraversal(valid)).toMatchObject({ ok: true, forwardBoundaryContained: true, backwardBoundaryContained: true })
    expect(assessFocusTraversal({ ...valid, events: valid.events.map((e, i) => i === 2 ? { ...e, target: 'outside', inside: false } : e) }).ok).toBe(false)
    expect(assessFocusTraversal({ ...valid, events: [valid.events[0], valid.events[1], { type: 'keydown', key: 'x', inside: true }, valid.events[2], ...valid.events.slice(3)] }).ok).toBe(false)
    expect(assessFocusTraversal({ ...valid, first: 'wrong' }).ok).toBe(false)
    expect(assessFocusTraversal({ ...valid, events: valid.events.filter((event) => event.type !== 'focusin') }).ok).toBe(false)
    expect(assessFocusTraversal({ ...valid, events: valid.events.filter((event) => event.type !== 'keydown') }).ok).toBe(false)
  })
})

describe('bounded request-body persistence observation', () => {
  it('detects fixture IDs in a non-GET URL or bounded postData without exposing bodies', () => {
    const events = (request) => [{ method: 'Network.requestWillBeSent', params: { request } }]
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/bulk', postData: '{"ids":[910001]}' }), ['910001'], 1024)).toMatchObject({ observedNonGetRequests: 1, fixtureMutationRequests: 1, truncatedBodies: 0, unavailableBodies: 0, safe: false })
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/items/910001' }), ['910001'], 1024).fixtureMutationRequests).toBe(1)
    expect(observeFixtureMutationRequests(events({ method: 'GET', url: 'https://x/items/910001', postData: '910001' }), ['910001'], 1024).fixtureMutationRequests).toBe(0)
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/bulk', postData: `${'x'.repeat(20)}910001` }), ['910001'], 20)).toMatchObject({ observedNonGetRequests: 1, fixtureMutationRequests: 0, truncatedBodies: 1, unavailableBodies: 0, safe: false })
  })

  it('fails closed when a non-GET body is truncated or unavailable', () => {
    const events = (request) => [{ method: 'Network.requestWillBeSent', params: { request } }]
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/bulk' }), ['910001'], 20)).toMatchObject({ unavailableBodies: 1, safe: false })
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/bulk', postData: 'x'.repeat(21) }), ['910001'], 20)).toMatchObject({ truncatedBodies: 1, safe: false })
    expect(observeFixtureMutationRequests(events({ method: 'POST', url: 'https://x/bulk', postData: 'complete' }), ['910001'], 20)).toMatchObject({ unavailableBodies: 0, truncatedBodies: 0, safe: true })
  })
})

describe('exact mixed-direction field mapping', () => {
  const specs = [{ id: 'title', selector: '.title > bdi', surface: 'card', value: 'Atlas ثابت', kind: 'human', dir: 'auto', computedDirection: 'rtl', axRole: 'StaticText', axName: 'Atlas ثابت' }]
  const rows = [{ id: 'title', selector: '.title > bdi', surface: 'card', text: 'Atlas ثابت', exactText: true, className: 'library-bidi-human', dir: 'auto', computedDirection: 'rtl', unicodeBidi: 'isolate', axRole: 'StaticText', axName: 'Atlas ثابت', backendNodeId: 10, axBackendNodeId: 10, matchedAxBackendNodeId: 12, selectedAxNodeId: '10', matchedAxNodeId: '12', axNodes: [ax(10, 'generic', '', ['12']), ax(12, 'StaticText', 'Atlas ثابت')], viewportId: 'desktop-1280x900' }]
  it('rejects every mapping and associated-name mutation', () => {
    expect(assessMixedDirectionFields(specs, rows).ok).toBe(true)
    for (const mutation of [
      { selector: '.elsewhere > bdi' }, { text: 'Atlas' }, { className: 'library-bidi-machine' }, { dir: 'ltr' },
      { computedDirection: 'ltr' }, { unicodeBidi: 'normal' }, { axName: 'Unrelated Atlas ثابت' },
      { axSelector: '.other' }, { axRole: 'button' }, { backendNodeId: 0 }, { axBackendNodeId: 0 }, { viewportId: 'mobile-390x844' },
    ]) expect(assessMixedDirectionFields(specs, [{ ...rows[0], ...mutation }], 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields([...specs, { ...specs[0], id: 'publisher' }], rows).ok).toBe(false)
    expect(assessMixedDirectionFields([{ ...specs[0], axName: undefined }], rows, 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields(specs, rows, 'desktop-1280x900').ok).toBe(true)
    expect(assessMixedDirectionFields(specs, rows, 'mobile-390x844').ok).toBe(false)
    expect(assessMixedDirectionFields(specs, [{ ...rows[0], backendNodeId: 99 }], 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields(specs, [{ ...rows[0], axBackendNodeId: 99 }], 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields(specs, [{ ...rows[0], matchedAxNodeId: '99', matchedAxBackendNodeId: 99,
      axNodes: [...rows[0].axNodes, ax(99, 'StaticText', 'Atlas ثابت')] }], 'desktop-1280x900').ok).toBe(false)
  })

  it('binds the matched AX node to the selected backend or its rooted StaticText descendant', () => {
    const rootedStaticText = [{
      ...rows[0], backendNodeId: 11, axRole: 'StaticText', axName: 'Atlas ثابت', axBackendNodeId: 11,
      matchedAxBackendNodeId: 12, selectedAxNodeId: '11', matchedAxNodeId: '12',
      axNodes: [ax(11, 'generic', '', ['12']), ax(12, 'StaticText', 'Atlas ثابت')],
    }]
    const staticSpecs = [{ ...specs[0], axRole: 'StaticText', axName: 'Atlas ثابت' }]
    expect(assessMixedDirectionFields(staticSpecs, rootedStaticText, 'desktop-1280x900').ok).toBe(true)

    const unrelatedDuplicateRelative = [ax(11, 'generic', '', ['13']), ax(13, 'StaticText', 'other'), ax(99, 'StaticText', 'Atlas ثابت')]
    expect(assessMixedDirectionFields(staticSpecs, [{ ...rootedStaticText[0], matchedAxBackendNodeId: 99, matchedAxNodeId: '99', axNodes: unrelatedDuplicateRelative }], 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields(staticSpecs, [{ ...rootedStaticText[0], axNodes: undefined }], 'desktop-1280x900').ok).toBe(false)
    expect(assessMixedDirectionFields(specs, [{ ...rows[0], matchedAxBackendNodeId: 99, matchedAxNodeId: '99', axNodes: [ax(10, 'generic', '', ['12']), ax(12, 'StaticText', 'Atlas ثابت'), ax(99, 'StaticText', 'Atlas ثابت')] }], 'desktop-1280x900').ok).toBe(false)
  })

  it('rejects copied-and-relabeled desktop/mobile observations at the paired gate', () => {
    const desktopIdentity = Object.freeze({ capture: 'desktop' })
    const mobileIdentity = Object.freeze({ capture: 'mobile' })
    const desktop = { fixtureFieldRows: rows, viewportId: 'desktop-1280x900', viewport: { width: 1280, height: 900, mobile: false }, captureIdentity: desktopIdentity, captureSequence: 1 }
    const mobileRows = rows.map((row) => ({ ...row, viewportId: 'mobile-390x844' }))
    const mobile = { fixtureFieldRows: mobileRows, viewportId: 'mobile-390x844', viewport: { width: 390, height: 844, mobile: true }, captureIdentity: mobileIdentity, captureSequence: 2 }
    recordMixedDirectionCapture(desktop, { identity: desktopIdentity, sequence: 1, viewportId: 'desktop-1280x900', width: 1280, height: 900, mobile: false })
    recordMixedDirectionCapture(mobile, { identity: mobileIdentity, sequence: 2, viewportId: 'mobile-390x844', width: 390, height: 844, mobile: true })
    expect(assessMixedDirectionCaptures(specs, { desktop, mobile }, { desktopIdentity, mobileIdentity }).ok).toBe(true)

    const cloned = { ...desktop, fixtureFieldRows: desktop.fixtureFieldRows.map((row) => ({ ...row, viewportId: 'mobile-390x844' })),
      viewportId: 'mobile-390x844', viewport: { width: 390, height: 844, mobile: true }, captureIdentity: mobileIdentity, captureSequence: 2 }
    expect(assessMixedDirectionCaptures(specs, { desktop, mobile: cloned }, { desktopIdentity, mobileIdentity }).ok).toBe(false)
    expect(assessMixedDirectionCaptures(specs, { desktop, mobile: { ...mobile, captureIdentity: desktopIdentity } }, { desktopIdentity, mobileIdentity }).ok).toBe(false)
    expect(assessMixedDirectionCaptures(specs, { desktop, mobile: { ...mobile, captureSequence: 1 } }, { desktopIdentity, mobileIdentity }).ok).toBe(false)
  })

  it('binds paired assessment to capture-time rows and nested AX graphs', () => {
    const registerPair = (desktopRows) => {
      const desktopIdentity = Object.freeze({ capture: 'desktop' })
      const mobileIdentity = Object.freeze({ capture: 'mobile' })
      const desktop = { fixtureFieldRows: desktopRows, viewportId: 'desktop-1280x900', viewport: { width: 1280, height: 900, mobile: false }, captureIdentity: desktopIdentity, captureSequence: 1 }
      const mobile = { fixtureFieldRows: rows.map((row) => ({ ...row, viewportId: 'mobile-390x844' })), viewportId: 'mobile-390x844', viewport: { width: 390, height: 844, mobile: true }, captureIdentity: mobileIdentity, captureSequence: 2 }
      expect(recordMixedDirectionCapture(desktop, { identity: desktopIdentity, sequence: 1, viewportId: 'desktop-1280x900', width: 1280, height: 900, mobile: false })).toBe(true)
      expect(recordMixedDirectionCapture(mobile, { identity: mobileIdentity, sequence: 2, viewportId: 'mobile-390x844', width: 390, height: 844, mobile: true })).toBe(true)
      return { captures: { desktop, mobile }, identities: { desktopIdentity, mobileIdentity } }
    }

    const replaced = registerPair(rows.map((row) => ({ ...row, text: 'invalid at capture time' })))
    expect(assessMixedDirectionCaptures(specs, replaced.captures, replaced.identities).ok, 'before_caller_edit').toBe(false)
    replaced.captures.desktop.fixtureFieldRows = rows
    expect(assessMixedDirectionCaptures(specs, replaced.captures, replaced.identities).ok, 'after_caller_edit: top-level replacement').toBe(false)

    const nested = registerPair(rows.map((row) => ({ ...row, axNodes: row.axNodes.map((node, index) => ({ ...node, name: { ...node.name, value: index === 1 ? 'invalid at capture time' : node.name.value } })) })))
    expect(assessMixedDirectionCaptures(specs, nested.captures, nested.identities).ok, 'before_caller_edit: nested AX node').toBe(false)
    nested.captures.desktop.fixtureFieldRows[0].axNodes[1].name.value = specs[0].axName
    expect(assessMixedDirectionCaptures(specs, nested.captures, nested.identities).ok, 'after_caller_edit: nested AX node').toBe(false)
  })
})

describe('exact sidebar state AX evidence', () => {
  it('requires the exact descendant name/description and mutually exclusive DOM states', () => {
    const nodes = [ax(10, 'complementary', 'Publication details', ['11']), ax(11, 'status', 'Loading publication details…')]
    const valid = { backendNodeId: 10, rootRoles: ['complementary'], rootName: 'Publication details', descendantExpectations: [{ backendNodeId: 11, roles: ['status'], name: 'Loading publication details…', description: '' }] }
    expect(assessAxSubtree(nodes, valid).ok).toBe(true)
    expect(assessAxSubtree(nodes, { ...valid, descendantExpectations: [{ ...valid.descendantExpectations[0], name: 'Wrong' }] }).ok).toBe(false)
    expect(assessAxSubtree(nodes, { ...valid, descendantExpectations: [{ ...valid.descendantExpectations[0], backendNodeId: 99 }] }).ok).toBe(false)
    expect(assessSidebarDomState({ open: true, loading: true, success: false, error: false, stateExclusive: true }, 'loading')).toBe(true)
    expect(assessSidebarDomState({ open: true, loading: true, success: true, error: false, stateExclusive: false }, 'loading')).toBe(false)
  })


  it('rejects consistently wrong or untranslated DOM and AX state copy', () => {
    const expected = { rootName: 'تفاصيل المنشور', stateName: 'جارٍ تحميل تفاصيل المنشور…' }
    const assess = (dom, nodes) => assessSidebarDomState(dom, 'loading', expected)
      && assessAxSubtree(nodes, { backendNodeId: 10, rootRoles: ['complementary'], rootName: expected.rootName,
        descendantExpectations: [{ backendNodeId: 11, roles: ['status'], name: expected.stateName, description: '' }] }).ok
    expect(assess({ open: true, loading: true, success: false, error: false, stateExclusive: true,
      rootName: expected.rootName, stateName: expected.stateName }, [ax(10, 'complementary', expected.rootName, ['11']), ax(11, 'status', expected.stateName)])).toBe(true)
    expect(assess({ open: true, loading: true, success: false, error: false, stateExclusive: true,
      rootName: 'خطأ ثابت', stateName: 'خطأ ثابت' }, [ax(10, 'complementary', 'خطأ ثابت', ['11']), ax(11, 'status', 'خطأ ثابت')])).toBe(false)
    expect(assess({ open: true, loading: true, success: false, error: false, stateExclusive: true,
      rootName: 'Publication details', stateName: 'Loading publication details…' }, [ax(10, 'complementary', 'Publication details', ['11']), ax(11, 'status', 'Loading publication details…')])).toBe(false)
  })
})
