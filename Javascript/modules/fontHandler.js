import { fontContainer, fontName, body, input } from "../dom/elements.js";

export function containerVisibilityToggle() {
  fontContainer.classList.toggle("font-options--visible");
}

export function serifHandler() {
  body.classList.add("full-content--lora");
  body.classList.remove("full-content--iconsolata");
  input.classList.add("search-container__input--lora");
  input.classList.remove("search-container__input--iconsolata");
  fontName.textContent = "Serif";
}

export function monoHandler() {
  body.classList.add("full-content--iconsolata");
  body.classList.remove("full-content--lora");
  input.classList.add("search-container__input--iconsolata");
  input.classList.remove("search-container__input--lora");
  fontName.textContent = "Mono";
}

export function sansHandler() {
  body.classList.remove("full-content--lora");
  body.classList.remove("full-content--iconsolata");
  input.classList.remove("search-container__input--lora");
  input.classList.remove("search-container__input--iconsolata");
  fontName.textContent = "Sans Serif";
}
