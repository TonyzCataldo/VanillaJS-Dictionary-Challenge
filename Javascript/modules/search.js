import { wordEl, phoneticEl, responseEl } from "../dom/elements.js";
import { renderDefinitions } from "./renderDefinitions.js";
import { renderFooter } from "./renderFooter.js";
import { handleError } from "./handleError.js";

export function search(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("word not found");
      return res.json();
    })
    .then((data) => {
      const entry = data[0];
      wordEl.textContent = entry.word;
      phoneticEl.textContent = entry.phonetic;

      const phoneticsWithAudio = entry.phonetics.find((p) => p.audio);
      window.audioLink = phoneticsWithAudio ? phoneticsWithAudio.audio : "";

      document
        .querySelectorAll(".result-description")
        .forEach((el) => el.remove());
      renderDefinitions(entry.meanings, search); // Passa a função Search para os sinônimos

      document.querySelectorAll(".footer").forEach((el) => el.remove());
      renderFooter(entry.sourceUrls[0]);

      responseEl.classList.add("response--visible");
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch((error) => {
      handleError();
    });
}
