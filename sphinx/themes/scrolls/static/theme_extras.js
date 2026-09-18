/* @license magnet:?xt=urn:btih:87f119ba0b429ba17a44b4bffcab33165ebdacc0&dn=freebsd.txt BSD-2-Clause
 * SPDX-FileCopyrightText: Copyright 2007-2024 by the Sphinx team
 * SPDX-License-Identifier: BSD-2-Clause
 */
const initialiseThemeExtras = () => {
  const toc = document.getElementById("toc");
  toc.style.display = "";
  const items = toc.getElementsByTagName("ul")[0];
  items.style.display = "none";
  toc.getElementsByTagName("h3").addEventListener("click", () => {
    if (items.style.display !== "none") toc.classList.remove("expandedtoc");
    else toc.classList.add("expandedtoc");
  });
};
if (document.readyState !== "loading") initialiseThemeExtras();
else document.addEventListener("DOMContentLoaded", initialiseThemeExtras);

/* @license-end */
