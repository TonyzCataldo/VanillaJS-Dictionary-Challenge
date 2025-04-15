import { errorContainerEl, responseEl } from "../dom/elements.js";

export function handleError() {
  errorContainerEl.classList.add("error-container--visible");
  responseEl.classList.remove("response--visible");
}
