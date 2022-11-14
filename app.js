const board = document.querySelector("#board");
const colors = [
  "#e76e9b",
  "#e76e6e",
  "#e56ee7",
  "#6e72e7",
  "#6ebbe7",
  "#6ee7e1",
  "#6ee7a4",
  "#76e76e",
  "#bee76e",
  "#e7e36e",
  "#e7bc6e",
  "#e78a6e",
  "#e76e6e",
];
const SQUARE_NUMBERS = 625;

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)];
}
