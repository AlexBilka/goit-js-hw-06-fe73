const counter = document.getElementById("counter");
const value = document.getElementById("value");
const decrBtn = counter.querySelector('[data-action="decrement"]');
const incrBtn = counter.querySelector('[data-action="increment"]');
let counterValue = 0;

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

decrBtn.addEventListener("click", decrement);
incrBtn.addEventListener("click", increment);
