//variables
const operation = document.querySelectorAll(".operation");
let result = document.querySelector(".result");

//event listener on buttons to determine the operation
operation.forEach((operation) => {
  operation.addEventListener("click", calculate);
});

//function to get number values from input fields
const readNumbers = function () {
  number1 = Number(document.querySelector(".number1").value);
  number2 = Number(document.querySelector(".number2").value);
};

//main function to get the final result
function calculate() {
  let operationSymbol = this.innerText;
  readNumbers();
  switch (operationSymbol) {
    case "+":
      result.innerText = `Result is: ${number1 + number2}`;
      break;
    case "-":
      result.innerText = `Result is: ${number1 - number2}`;
      break;
    case "/":
      result.innerText = `Result is: ${number1 / number2}`;
      break;
    case "*":
      result.innerText = `Result is: ${number1 * number2}`;
      break;
    case "%":
      result.innerText = `Result is: ${number1 % number2}`;
      break;
    default:
      result.innerText = `Unknown operation. Please try again.`;
      break;
  }
}

//clear button to reset all fields
document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".number1").value = "";
  document.querySelector(".number2").value = "";
  document.querySelector(".result").innerText = "Let's count something 😎";
});
