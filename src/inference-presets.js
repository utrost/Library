// One catalogue of supplied definitions for the rule editor and the file worklist.
export function inferencePresets(t) {
  return [
    { id: 'title', name: t('library', 'Title from filename'), pattern: '%folders%/%title%.%extension%', example: 'Author/Book title.epub' },
    { id: 'by', name: t('library', 'Title by Author'), pattern: '%folders%/%title% by %author%.%extension%', example: 'books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub' },
    { id: 'title-author', name: t('library', 'Title - Author'), pattern: '%folders%/%title% - %author%.%extension%', example: 'Fiction/The Left Hand of Darkness - Ursula K. Le Guin.epub' },
    { id: 'title-author-year', name: t('library', 'Title - Author (Year)'), pattern: '%folders%/%title% - %author% (%year%).%extension%', example: 'Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub' },
    { id: 'author-title', name: t('library', 'Author - Title'), pattern: '%folders%/%author% - %title%.%extension%', example: 'Ada Quill - A Quiet Orchard.epub' },
    { id: 'author-folder', name: t('library', 'Author folder / Title'), pattern: '%folders%/%author%/%title%.%extension%', example: 'Ada Quill/A Quiet Orchard.epub' },
    { id: 'series', name: t('library', 'Series folder / Number. Title - Author (Year)'), pattern: '%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%', example: 'Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub' },
    { id: 'series-inline', name: t('library', 'Series #Number - Title - Author (Year)'), pattern: '%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%', example: 'Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub' },
    { id: 'language-subject', name: t('library', 'books / Language_Subject / Title - Author (Year)'), pattern: 'books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%', example: 'books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub' },
    { id: 'language-subject-by', name: t('library', 'books / Language_Subject / Title by Author'), pattern: 'books/%language%_%subject%/%folders%/%title% by %author%.%extension%', example: 'books/english_fiction/A String in Her Tale by Mark Ezra.epub' },
    { id: 'series-underscore', name: t('library', 'Series folder / Number_Title_Author'), pattern: '%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%', example: 'Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub' },
  ]
}
