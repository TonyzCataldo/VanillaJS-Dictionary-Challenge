export function playPhonetic() {
  let audio = new Audio(audioLink);
  if (audioLink === "") {
    console.log("Audio file not founded!");
  } else {
    audio.play();
  }
}
