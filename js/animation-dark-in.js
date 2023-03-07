const checkbox = document.getElementById("animation-dark-checkbox");
const body = document.body;

checkbox.addEventListener("change", function() {
  if (this.checked) {
    body.classList.remove("body-animation-dark-out");
    body.classList.add("body-animation-dark-in");
    body.classList.add("dark");
    setTimeout(() => {
      body.classList.remove("body-animation-dark-in");
    }, 1200);
  } else {
    body.classList.remove("body-animation-dark-in");
    body.classList.remove("dark");
    body.classList.add("body-animation-dark-out");
    setTimeout(() => {
      body.classList.remove("body-animation-dark-out");
    }, 1200);
  }
});

