const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const inputLength = input.dataset.length;

  // Метод .trim видаляє випадкові пробіли;
  // За допомогою вбудованої функції parseInt приводимо рядок до числа:
  if (inputValue.trim().length === parseInt(inputLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
