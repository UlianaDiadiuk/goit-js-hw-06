const counter = document.querySelector("#counter");
const value = counter.querySelector("#value");
const decrementButton = counter.querySelector("[data-action='decrement']");
const incrementButton = counter.querySelector("[data-action='increment']");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1 ;
  value.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1 ;
  value.textContent = counterValue;
});


