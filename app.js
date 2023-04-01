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
  console.log(showNumber);
  number.innerHTML = showNumber;
};

const rHandler = () => {
  number.innerHTML = 0;
};

dBtn.addEventListener("click", () => sumHandler(-1));
iBtn.addEventListener("click", () => sumHandler(1));
rBtn.addEventListener("click", rHandler);
