let calculateResult = document.querySelector(".calculator_header");

let opratorArea = document.querySelector(".controll_area");

let numberArea = document.querySelector(".number_area");

let resultButton = document.querySelector(".result_btn");

let calcObj = {
  number: 0,
  oprator: "",
  nextNumber: 0,
};

numberArea.addEventListener("click", (e) => {
  if (parseInt(calculateResult.innerHTML) === 0) {
    calcObj.number = parseInt(e.target.innerHTML);
    console.log(calcObj.number);
    calculateResult.innerHTML = calcObj.number;
  } else {
    calcObj.number =
      parseInt(calculateResult.innerHTML) * 10 + parseInt(e.target.innerHTML);
    calculateResult.innerHTML = calcObj.number;
    console.log(calcObj);
  }
});
