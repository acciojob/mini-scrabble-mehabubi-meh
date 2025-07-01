//your code here
//your code here
const inputBox = document.getElementById("evaluatedText");
const counter = document.getElementById("letterCount");

inputBox.addEventListener("input", () => {
  counter.innerText = inputBox.value.length;
});
