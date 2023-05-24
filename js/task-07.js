const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


input.addEventListener("input", () => {
  const fontSize = input.value + 'px';
  text.style.fontSize = fontSize;
});

