import { responseEl } from "../dom/elements.js";
import { search } from "./search.js";

export function renderDefinitions(meanings) {
  meanings.forEach((meaning) => {
    const section = document.createElement("section");
    section.classList.add("result-description");

    // Tipo (part of speech)
    const typeLine = document.createElement("div");
    typeLine.classList.add("type-line");

    const typeLineWord = document.createElement("p");
    typeLineWord.classList.add("type-line__word");
    typeLineWord.textContent = meaning.partOfSpeech;

    const typeLineLine = document.createElement("div");
    typeLineLine.classList.add("type-line__line");

    typeLine.appendChild(typeLineWord);
    typeLine.appendChild(typeLineLine);
    section.appendChild(typeLine);

    // Significado
    const pMeaning = document.createElement("p");
    pMeaning.classList.add("result-description__meaning");
    pMeaning.textContent = "Meaning";
    section.appendChild(pMeaning);

    const resultUl = document.createElement("ul");
    resultUl.classList.add("result");
    section.appendChild(resultUl);

    meaning.definitions.slice(0, 6).forEach((def) => {
      const li = document.createElement("li");
      li.textContent = def.definition;

      if (def.example) {
        const example = document.createElement("p");
        example.classList.add("result__example");
        example.textContent = `"${def.example}"`;
        li.appendChild(example);
      }

      resultUl.appendChild(li);
    });

    // Sinônimos
    if (Array.isArray(meaning.synonyms) && meaning.synonyms.length > 0) {
      const resultSynonyms = document.createElement("div");
      resultSynonyms.classList.add("result-synonyms");

      const synonymsText = document.createElement("p");
      synonymsText.classList.add("result-synonyms__text");
      synonymsText.textContent = "Synonyms";

      resultSynonyms.appendChild(synonymsText);

      meaning.synonyms.slice(0, 3).forEach((synonym) => {
        const synonymLink = document.createElement("a");
        synonymLink.classList.add("result-synonyms__result");
        synonymLink.textContent = synonym;
        synonymLink.href = "#";
        synonymLink.addEventListener("click", (e) => {
          e.preventDefault();
          search(synonym);
        });
        resultSynonyms.appendChild(synonymLink);
      });

      section.appendChild(resultSynonyms);
    }

    responseEl.appendChild(section);
  });
}
