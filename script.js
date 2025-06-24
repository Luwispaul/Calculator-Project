"use strict";
const display = document.querySelector(".display");

const powerBtn = document.querySelector(".power-btn");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");

const dynamicBtn = document.querySelectorAll(".dynamic-inp");

const btnDivide = document.querySelector(".btn-divide");
const btnTimes = document.querySelector(".btn-times");
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const btnEqual = document.querySelector(".btn-equal");

let power = "off";
let inputString = "";

// Initial value
const init = function () {
  inputString = " ";
  display.textContent = "";
};

// Implementing the power feature
const powerSwitch = function () {
  if (power === "off") {
    power = "on";
    display.style.backgroundColor = "#f0f087";
  } else if (power === "on") {
    power = "off";
    display.style.backgroundColor = "#333333c6";
    init();
  }
};
powerBtn.addEventListener("click", powerSwitch);

// Implementing clear button
clearBtn.addEventListener("click", init);

//Implementing delete button
deleteBtn.addEventListener("click", function () {
  let currdis = display.textContent;
  let updis = currdis.slice(0, -1);
  display.textContent = updis;
});

// Implementing input features
const input = function () {
  // Used forEach loop => i still need to learn more about this
  dynamicBtn.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.dataset.value; // => stores the data-value into the value variable

      if (power === "on") {
        // Handling operator buttons
        if (value !== undefined) {
          if (value === "/") {
            display.textContent += "÷";
            console.log(display.textContent);
          } else if (value === "*") {
            display.textContent += "×";
          } else if (value === "-") {
            display.textContent += "-";
          } else if (value === "+") {
            display.textContent += "+";
          } else if (value === "%") {
            display.textContent += "%";
          }

          inputString += value;

          // Handling number input
        } else if (value === undefined) {
          const textContent = this.textContent; // The "this" keyword selects the current button being clicked
          const addInput = () => {
            display.textContent += textContent;
          };

          if (textContent === "7") {
            addInput();
            inputString += textContent;
          } else if (textContent === "8") {
            addInput();
            inputString += textContent;
          } else if (textContent === "9") {
            addInput();
            inputString += textContent;
          } else if (textContent === "4") {
            addInput();
            inputString += textContent;
          } else if (textContent === "5") {
            addInput();
            inputString += textContent;
          } else if (textContent === "6") {
            addInput();
            inputString += textContent;
          } else if (textContent === "1") {
            addInput();
            inputString += textContent;
          } else if (textContent === "2") {
            addInput();
            inputString += textContent;
          } else if (textContent === "3") {
            addInput();
            inputString += textContent;
          } else if (textContent === "00") {
            addInput();
            inputString += textContent;
          } else if (textContent === "0") {
            addInput();
            inputString += textContent;
          } else if (textContent === ".") {
            addInput();
            inputString += textContent;
          }

          // Handling the equal button
          // console.log(inputString);
          if (textContent === "=") {
            // console.log(inputString);
            const result = eval(inputString);
            display.textContent = result;
            // console.log(display.textContent);
            inputString = " ";
          }
        }
      }
    });
  });
};
input();
