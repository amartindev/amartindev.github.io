const checkbits = document.getElementById("animation-bits-checkbox");
const bodybits = document.body;

checkbits.addEventListener("change", function() {
  if (this.checked) {
    bodybits.classList.add("bits");
  } else {
    bodybits.classList.remove("bits");
  }
});

