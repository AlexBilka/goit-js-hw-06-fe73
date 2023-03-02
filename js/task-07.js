const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// Додаємо розмір за замовчуванням:
text.style.fontSize = "56px";

fontSizeControl.addEventListener("input", function () {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
