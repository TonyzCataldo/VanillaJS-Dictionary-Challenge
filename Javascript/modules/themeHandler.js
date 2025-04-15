import { body } from "../dom/elements.js";

export function setInitialTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.classList.add(prefersDark ? "dark-theme" : "light-theme");
}

export function toggleTheme() {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}

export function watchSystemThemeChange() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQuery.addEventListener("change", (e) => {
    body.classList.toggle("dark-theme", e.matches);
    body.classList.toggle("light-theme", !e.matches);
  });
}
