import glob
import os

license_header = """/* @license magnet:?xt=urn:btih:87f119ba0b429ba17a44b4bffcab33165ebdacc0&dn=freebsd.txt BSD-2-Clause
 * SPDX-FileCopyrightText: Copyright 2007-2024 by the Sphinx team
 * SPDX-License-Identifier: BSD-2-Clause
 */
"""
license_footer = "\n/* @license-end */\n"

js_files = glob.glob('sphinx/themes/*/static/*.js')
for f in js_files:
    with open(f, 'r') as fp:
        content = fp.read()
    if "@license" not in content:
        with open(f, 'w') as fp:
            fp.write(license_header + content + license_footer)
        print(f"Updated {f}")
