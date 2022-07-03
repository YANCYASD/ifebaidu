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
  if (StringNumberToInt(calculateResult.innerHTML) === 0) {
    let tempNumber = parseInt(e.target.innerHTML);
    console.log(tempNumber);
  }
});


function StringNumberToInt(num){
    return parseInt(num)
}
