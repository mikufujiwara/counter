const dBtn = document.getElementById("decrease");
const rBtn = document.getElementById("reset");
const iBtn = document.getElementById("increase");
const number = document.getElementById("number");
let showNumber = parseInt(number.innerHTML);

console.log(parseInt(number.innerHTML));

// const iHander = () => {
//   showNumber += 1;
//   number.innerHTML = showNumber;
// };

// const deHander = () => {
//   showNumber -= 1;
//   number.innerHTML = showNumber;
// };

const sumHandler = (val) => {
  showNumber += val;
  number.innerHTML = showNumber;

console.log(showNumber);

  if(showNumber > 0) {
    number.style.color = "#e84135"
  } else if (showNumber < 0) {
    number.style.color = "#3583e8"
  } else {
    number.style.color = "black";
  }
};

const rHandler = () => {
  number.innerHTML = 0;
  showNumber = 0
  number.style.color = "black";
};

dBtn.addEventListener("click", () => sumHandler(-1));
iBtn.addEventListener("click", () => sumHandler(1));
rBtn.addEventListener("click", rHandler);
