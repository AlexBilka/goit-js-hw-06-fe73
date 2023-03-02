const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");
// Додаємо колір за замовчуванням:
let currentColor = "#ee0da1";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  currentColor = randomColor;
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = currentColor;
  colorSpan.textContent = currentColor;
});
