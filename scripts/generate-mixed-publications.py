#!/usr/bin/env python3
"""Generate a deterministic balanced PDF/EPUB/CBZ/OPF publication corpus."""

from __future__ import annotations

import argparse
import base64
import json
import shutil
import zipfile
from pathlib import Path

FORMATS = ("pdf", "epub", "cbz", "opf")
PNG_1X1 = base64.b64decode(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
)
ZIP_DATE_TIME = (2020, 1, 1, 0, 0, 0)


def zip_entry(name: str, data: str | bytes, *, compression: int = zipfile.ZIP_DEFLATED) -> tuple[zipfile.ZipInfo, bytes]:
    info = zipfile.ZipInfo(name, date_time=ZIP_DATE_TIME)
    info.compress_type = compression
    info.create_system = 3
    info.external_attr = 0o100644 << 16
    payload = data.encode("utf-8") if isinstance(data, str) else data
    return info, payload


def write_zip_entry(archive: zipfile.ZipFile, name: str, data: str | bytes, *, compression: int = zipfile.ZIP_DEFLATED) -> None:
    info, payload = zip_entry(name, data, compression=compression)
    archive.writestr(info, payload)


def metadata(index: int, fmt: str) -> dict[str, str]:
    return {
        "title": f"Mixed {fmt.upper()} Publication {index:04d}",
        "creator": f"Author {index % 37:02d}",
        "publisher": f"Fixture Press {index % 19:02d}",
        "date": f"{2000 + (index % 26):04d}-{1 + (index % 12):02d}-01",
        "language": ("en", "de", "fr", "ar")[index % 4],
        "identifier": f"urn:library:mixed:{fmt}:{index:04d}",
    }


def opf_document(data: dict[str, str], *, with_manifest: bool = False) -> str:
    manifest = """
  <manifest><item id="content" href="content.xhtml" media-type="application/xhtml+xml"/></manifest>
  <spine><itemref idref="content"/></spine>""" if with_manifest else ""
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="id" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="id">{data["identifier"]}</dc:identifier>
    <dc:title>{data["title"]}</dc:title>
    <dc:creator>{data["creator"]}</dc:creator>
    <dc:publisher>{data["publisher"]}</dc:publisher>
    <dc:date>{data["date"]}</dc:date>
    <dc:language>{data["language"]}</dc:language>
  </metadata>{manifest}
</package>
'''


def write_pdf(path: Path, data: dict[str, str]) -> None:
    objects = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>",
        "<< /Length 0 >>\nstream\n\nendstream",
        f'<< /Title ({data["title"]}) /Author ({data["creator"]}) /Subject ({data["publisher"]}) /CreationDate (D:{data["date"].replace("-", "")}) >>',
    ]
    blob = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for number, obj in enumerate(objects, 1):
        offsets.append(len(blob))
        blob.extend(f"{number} 0 obj\n{obj}\nendobj\n".encode("latin-1"))
    xref = len(blob)
    blob.extend(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode())
    for offset in offsets[1:]:
        blob.extend(f"{offset:010d} 00000 n \n".encode())
    blob.extend(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R /Info 5 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode())
    path.write_bytes(blob)


def write_epub(path: Path, data: dict[str, str]) -> None:
    with zipfile.ZipFile(path, "w", compresslevel=9) as archive:
        write_zip_entry(archive, "mimetype", "application/epub+zip", compression=zipfile.ZIP_STORED)
        write_zip_entry(archive, "META-INF/container.xml", '''<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
 <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>''')
        write_zip_entry(archive, "OEBPS/content.opf", opf_document(data, with_manifest=True))
        write_zip_entry(archive, "OEBPS/content.xhtml", f'''<!doctype html><html xmlns="http://www.w3.org/1999/xhtml"><head><title>{data["title"]}</title></head><body><h1>{data["title"]}</h1></body></html>''')


def write_cbz(path: Path, data: dict[str, str]) -> None:
    comic = f'''<?xml version="1.0" encoding="utf-8"?>
<ComicInfo><Title>{data["title"]}</Title><Writer>{data["creator"]}</Writer><Publisher>{data["publisher"]}</Publisher><Year>{data["date"][:4]}</Year><LanguageISO>{data["language"]}</LanguageISO></ComicInfo>'''
    with zipfile.ZipFile(path, "w", compresslevel=9) as archive:
        write_zip_entry(archive, "ComicInfo.xml", comic)
        write_zip_entry(archive, "001.png", PNG_1X1)


def generate(destination: Path, count: int) -> dict[str, int]:
    if count < 4 or count % 4:
        raise ValueError("count must be a positive multiple of 4")
    shutil.rmtree(destination, ignore_errors=True)
    destination.mkdir(parents=True)
    per_format = count // 4
    counts: dict[str, int] = {}
    for fmt in FORMATS:
        counts[fmt] = per_format
        for local_index in range(per_format):
            index = FORMATS.index(fmt) * per_format + local_index + 1
            data = metadata(index, fmt)
            path = destination / f"mixed-{fmt}-{index:04d}.{fmt}"
            if fmt == "pdf":
                write_pdf(path, data)
            elif fmt == "epub":
                write_epub(path, data)
            elif fmt == "cbz":
                write_cbz(path, data)
            else:
                path.write_text(opf_document(data), encoding="utf-8")
    return counts


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("destination", type=Path)
    parser.add_argument("count", type=int, nargs="?", default=1000)
    args = parser.parse_args()
    counts = generate(args.destination, args.count)
    print(f"fixture_count={args.count}")
    print(f"fixture_formats={json.dumps(counts, sort_keys=True, separators=(',', ':'))}")


if __name__ == "__main__":
    main()
