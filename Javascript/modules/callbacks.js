import { input } from "../dom/elements.js";
import { search } from "./search.js";

export function enterCallback(e) {
  if (e.key === "Enter") {
    const word = input.value.trim();
    if (word === "") {
      document
        .querySelector(".search-container__error-msg")
        .classList.add("search-container__error-msg--visible");
      input.classList.add("search-container__input--error");
      document
        .querySelector(".error-container")
        .classList.remove("error-container--visible");
      document.querySelector(".response").classList.remove("response--visible");
    } else {
      document
        .querySelector(".search-container__error-msg")
        .classList.remove("search-container__error-msg--visible");
      input.classList.remove("search-container__input--error");
      document
        .querySelector(".error-container")
        .classList.remove("error-container--visible");
      document.querySelector(".response").classList.remove("response--visible");
      search(word);
    }
  }
}

export function clickCallback() {
  const word = input.value.trim();
  if (word === "") {
    document
      .querySelector(".search-container__error-msg")
      .classList.add("search-container__error-msg--visible");
    input.classList.add("search-container__input--error");
    document
      .querySelector(".error-container")
      .classList.remove("error-container--visible");
    document.querySelector(".response").classList.remove("response--visible");
  } else {
    document
      .querySelector(".search-container__error-msg")
      .classList.remove("search-container__error-msg--visible");
    input.classList.remove("search-container__input--error");
    document
      .querySelector(".error-container")
      .classList.remove("error-container--visible");
    document.querySelector(".response").classList.remove("response--visible");

    search(word);
  }
}
