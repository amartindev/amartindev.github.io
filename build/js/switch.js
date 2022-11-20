const input = document.querySelectorAll("input")
const body = document.querySelector("body");

console.log(input);

const toggleThemeMode = () => {
     body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;

console.log(toggleThemeMode);