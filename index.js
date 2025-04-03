const themeButton = document.querySelector('.theme-button');
const body = document.querySelector('body');
const fontSelector = document.querySelector('.header__container-font');
const fontContainer = document.querySelector('.font-options');
const sansSerif = document.querySelector('.font-options__sans-serif');
const serif = document.querySelector('.font-options__serif');
const mono = document.querySelector('.font-options__mono');
const input = document.querySelector('.search-container__input');


const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.body.classList.add(prefersDark ? "dark-theme" : "light-theme");


window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    document.body.classList.toggle("dark-theme", e.matches);
    document.body.classList.toggle("light-theme", !e.matches);
  });




themeButton.addEventListener("click", () => {
body.classList.toggle("dark-theme")
body.classList.toggle("light-theme")
})

fontSelector.addEventListener("click", (e) => {

  fontContainer.classList.toggle("font-options--visible")
  
})

serif.addEventListener("click", () => {
body.classList.add("full-content--lora");
body.classList.remove("full-content--iconsolata");
input.classList.add("search-container__input--lora");
input.classList.remove("search-container__input--iconsolata");
document.querySelector('.header__font').innerHTML = "Serif";

})

mono.addEventListener("click", () => {
  body.classList.add("full-content--iconsolata");
  body.classList.remove("full-content--lora")
  input.classList.add("search-container__input--iconsolata");
  input.classList.remove("search-container__input--lora");
  document.querySelector('.header__font').innerHTML = "Mono";
})

sansSerif.addEventListener("click", () => {
  body.classList.remove("full-content--lora");
  body.classList.remove("full-content--iconsolata");
  input.classList.remove("search-container__input--lora");
  input.classList.remove("search-container__input--iconsolata");
  document.querySelector('.header__font').innerHTML = "Sans Serif";
})


fetch("https://api.dictionaryapi.dev/api/v2/entries/en/keyboard")
  .then(res => res.json())
  .then(data => console.log(data));