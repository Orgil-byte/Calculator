const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "x²",
  "=",
];
const rightSymbols = ["÷", "×", "-", "+", "=", "x²"];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById(`display`);

let A = 0;
let operator = null;
let B = null;

for (let i = 0; i < buttonValues.length; i++) {
  //<button><button/> hiisen.
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;
  //Button-ii ungu solino
  if (value == 0) {
    button.style.width = `200px`;
    button.style.gridColumn = `span 2`;
  }
  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = `#ff9500`;
  }
  if (topSymbols.includes(value)) {
    button.style.backgroundColor = `#d4d4d2`;
    button.style.color = `#1c1c1c`;
  }
  //Button darah input deer garah process
  button.addEventListener("click", function () {
    if (rightSymbols.includes(value)) {
      if (value == `=`) {
        if (A != null) {
          B = display.value;
          let numA = Number(A);
          let numB = Number(B);
          if (operator == `÷`) {
            display.value = numA / numB;
          }
          if (operator == `×`) {
            display.value = numA * numB;
          }
          if (operator == `-`) {
            display.value = numA - numB;
          }
          if (operator == `+`) {
            display.value = numA + numA;
          }
          if (operator == `x²`) {
            display.value = numA ** numB;
          }
        }
      } else {
        operator = value;
        A = display.value;
        display.value = "";
      }
    } else if (topSymbols.includes(value)) {
      if (value == `AC`) {
        display.value = ``;
      }
      if (value == `+/-`) {
        display.value = Number(display.value) * -1;
      }
      if (value == `%`) {
        display.value = Number(display.value) / 100;
      }
    } else {
      //Else bol numbers and .
      if (value == `.`) {
        if (display.value != "" && !display.value.includes(value)) {
          display.value += value;
        }
      } else if (display.value == `0`) {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
  //Buttons id-ruu buh button-oo hiine.
  document.getElementById(`buttons`).appendChild(button);
}
