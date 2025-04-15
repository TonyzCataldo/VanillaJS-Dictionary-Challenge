import { responseEl } from "../dom/elements.js";

export function renderFooter(sourceUrl) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const source = document.createElement("div");
  source.classList.add("source");

  const sourceText = document.createElement("p");
  sourceText.classList.add("source__text");
  sourceText.textContent = "Source";

  const sourceLink = document.createElement("a");
  sourceLink.classList.add("source__link");
  sourceLink.textContent = sourceUrl;
  sourceLink.href = sourceUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";

  const svgLink = `
    <svg class="source__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
  `;

  sourceLink.insertAdjacentHTML("beforeend", svgLink);
  source.appendChild(sourceText);
  source.appendChild(sourceLink);
  footer.appendChild(source);
  responseEl.appendChild(footer);
}
