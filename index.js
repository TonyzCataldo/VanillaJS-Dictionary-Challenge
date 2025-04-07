const themeButton = document.querySelector('.theme-button');
const body = document.querySelector('body');
const fontSelector = document.querySelector('.header__container-font');
const fontContainer = document.querySelector('.font-options');
const sansSerif = document.querySelector('.font-options__sans-serif');
const serif = document.querySelector('.font-options__serif');
const mono = document.querySelector('.font-options__mono');
const input = document.querySelector('.search-container__input');
const inputIcon = document.querySelector('.search-container__svg');
let audioLink = ""
const playButton = document.querySelector('.result-container__circle');

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

playButton.addEventListener("click", () => {
let audio = new Audio(audioLink);
if(audioLink === ""){
  console.log("Audio file not founded!")
}
else{
audio.play()
}
})


function Search(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
  fetch(url).then((res) => {
    
    if (!res.ok) {
      throw new Error("word not found");
    }
    return res.json();
  })
  .then((data) => {
    
    console.log(data);
    
    
    document.getElementById('word').textContent = data[0].word;
    document.getElementById('phonetic').textContent = data[0].phonetic;
    const phoneticsWithAudio = data[0].phonetics.find(p => p.audio);
    audioLink = phoneticsWithAudio ? phoneticsWithAudio.audio : "";

    const meanings = data[0].meanings;
    
    const sections = document.querySelectorAll(".result-description");
sections.forEach((el) => el.remove());

    meanings.forEach((meaning) =>{
      const section = document.createElement("section");
      section.classList.add("result-description");

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
      document.querySelector('.response').appendChild(section);

      const pMeaning = document.createElement("p");
      pMeaning.classList.add("result-description__meaning");
      pMeaning.textContent = "Meaning"
      section.appendChild(pMeaning);

      const resultUl = document.createElement("ul");
      resultUl.classList.add("result");
      section.appendChild(resultUl);

      const definitions = meaning.definitions;
      let count = 0;

      definitions.forEach((definition) => {
      if (count >= 6) return;
      const li = document.createElement("li");
      li.textContent = definition.definition;
      resultUl.appendChild(li);
      if(definition.example){
        const example = document.createElement("p");
        example.classList.add("result__example");
        example.textContent = `"${definition.example}"`;
        li.appendChild(example);
      }
      count++;
      });


      const resultSynonyms = document.createElement("div");
resultSynonyms.classList.add("result-synonyms");

const synonymsText = document.createElement("p");
synonymsText.classList.add("result-synonyms__text");
synonymsText.textContent = "Synonyms";

const synonyms = meaning.synonyms;

if (Array.isArray(synonyms) && synonyms.length > 0) {
  resultSynonyms.appendChild(synonymsText);

  synonyms.slice(0, 3).forEach((synonym, index) => {
    

    const synonymLink = document.createElement("a");
    synonymLink.classList.add("result-synonyms__result");
    synonymLink.textContent = synonym;
    synonymLink.href = "#"; 
    synonymLink.addEventListener("click", (e) => {
      e.preventDefault();
      Search(synonym); 
    });

    resultSynonyms.appendChild(synonymLink);
  });

  section.appendChild(resultSynonyms);
}

      

    });


    document.querySelectorAll('.footer').forEach(el => el.remove());
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const source = document.createElement("div");
    source.classList.add("source");
    const sourceText = document.createElement("p");
    sourceText.classList.add("source__text");
    sourceText.textContent = "Source";
    const sourceLink = document.createElement("a");
    sourceLink.classList.add("source__link");
    sourceLink.textContent = data[0].sourceUrls[0];

    sourceLink.href = data[0].sourceUrls[0];
sourceLink.target = "_blank";
sourceLink.rel = "noopener noreferrer";


    const svgLink = `
    <svg class="source__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
    `;


    sourceLink.insertAdjacentHTML("beforeend",svgLink);
    source.appendChild(sourceText);
    source.appendChild(sourceLink);
    footer.appendChild(source);
    document.querySelector('.response').appendChild(footer);
    
    
    document.querySelector('.response').classList.add("response--visible")

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })


  .catch((error) =>{
    console.log(error)
document.querySelector('.error-container').classList.add("error-container--visible")
document.querySelector('.response').classList.remove("response--visible")
  })
  input.value = ""
}



input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    const word = input.value.trim();
    if(word === ""){
      document.querySelector('.search-container__error-msg').classList.add("search-container__error-msg--visible")
      input.classList.add("search-container__input--error")
      document.querySelector('.error-container').classList.remove("error-container--visible")
      document.querySelector('.response').classList.remove("response--visible")
    }
    else{
      document.querySelector('.search-container__error-msg').classList.remove("search-container__error-msg--visible")
      input.classList.remove("search-container__input--error")
      document.querySelector('.error-container').classList.remove("error-container--visible")
      document.querySelector('.response').classList.remove("response--visible")
    }
  if(word){
    Search(word);
  }
  }
  })

  inputIcon.addEventListener("click", () => {
    const word = input.value.trim();
    if(word === ""){
      document.querySelector('.search-container__error-msg').classList.add("search-container__error-msg--visible")
      input.classList.add("search-container__input--error")
      document.querySelector('.error-container').classList.remove("error-container--visible")
      document.querySelector('.response').classList.remove("response--visible")
    }
    else{
      document.querySelector('.search-container__error-msg').classList.remove("search-container__error-msg--visible")
      input.classList.remove("search-container__input--error")
      document.querySelector('.error-container').classList.remove("error-container--visible")
      document.querySelector('.response').classList.remove("response--visible")
    }
    if (word) {
      Search(word);
    }
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const defaultWord = "keyboard"; 
    input.value = defaultWord;   
    Search(defaultWord);         
  });