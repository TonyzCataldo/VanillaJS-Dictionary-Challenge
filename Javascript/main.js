import {
  themeButton,
  fontSelector,
  serif,
  mono,
  sansSerif,
  playButton,
  input,
  inputIcon,
} from "./dom/elements.js";

import {
  setInitialTheme,
  toggleTheme,
  watchSystemThemeChange,
} from "./modules/themeHandler.js";

import {
  containerVisibilityToggle,
  monoHandler,
  serifHandler,
  sansHandler,
} from "./modules/fontHandler.js";

import { playPhonetic } from "./modules/playPhonetic.js";
import { enterCallback, clickCallback } from "./modules/callbacks.js";
import { search } from "./modules/search.js";

setInitialTheme();
watchSystemThemeChange();

themeButton.addEventListener("click", toggleTheme);
fontSelector.addEventListener("click", containerVisibilityToggle);

serif.addEventListener("click", serifHandler);
mono.addEventListener("click", monoHandler);
sansSerif.addEventListener("click", sansHandler);

playButton.addEventListener("click", playPhonetic);

input.addEventListener("keydown", enterCallback);
inputIcon.addEventListener("click", clickCallback);

window.addEventListener("DOMContentLoaded", () => {
  const defaultWord = "keyboard";
  input.value = defaultWord;
  search(defaultWord);
});
