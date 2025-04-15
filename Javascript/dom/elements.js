export const themeButton = document.querySelector(".theme-button");
export const body = document.querySelector("body");
export const fontSelector = document.querySelector(".header__container-font");
export const fontContainer = document.querySelector(".font-options");
export const sansSerif = document.querySelector(".font-options__sans-serif");
export const serif = document.querySelector(".font-options__serif");
export const mono = document.querySelector(".font-options__mono");
export const input = document.querySelector(".search-container__input");
export const inputIcon = document.querySelector(".search-container__svg");
export const playButton = document.querySelector(".result-container__circle");
export const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
export const fontName = document.querySelector(".header__font");

export const wordEl = document.getElementById("word");
export const phoneticEl = document.getElementById("phonetic");
export const responseEl = document.querySelector(".response");
export const errorContainerEl = document.querySelector(".error-container");
