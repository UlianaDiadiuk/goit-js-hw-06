const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


input.addEventListener("change", () => {
  const fontSize = input.value + 'px';
  text.style.fontSize = fontSize;
});

