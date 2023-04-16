const input = document.querySelector("#validation-input");


input.addEventListener("blur", () =>  {
  if (input.value.length == input.getAttribute('data-length')) {
    input.classList.add("valid");
  }
  else {
    input.classList.add("invalid");
  }
});
                     