const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const inputLength = input.dataset.length;

  if (inputValue.length === parseInt(inputLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
