const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "white", "purple"];

button.addEventListener("click", changeBackground);

let queue = 0;

function changeBackground() {
  // --------------
  // Random a color
  // --------------

  //   const randomNum = Math.floor(Math.random() * colors.length);
  //   const chosenColor = colors[randomNum];
  //   console.log(randomNum, chosenColor);
  //   body.style.backgroundColor = chosenColor;

  // --------------
  // color in order
  // --------------

  console.log(queue);
  if (queue == 4) queue = -1;
  const chosenColor = colors[queue];
  queue++;
  body.style.backgroundColor = chosenColor;
}
