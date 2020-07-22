const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "cyan",
  "snow",
  "pink",
  "black",
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = generateRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function generateRandomNumber() {
  let random = Math.floor(Math.random() * colors.length);
  if (random <= colors.length) {
    return random;
  } else {
    generateRandomNumber();
  }
}
