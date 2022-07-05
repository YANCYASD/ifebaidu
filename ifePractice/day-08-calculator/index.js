let calculateResult = document.querySelector(".calculator_header");

let opratorArea = document.querySelector(".controll_area");

let numberArea = document.querySelector(".number_area");

let resultButton = document.querySelector(".result_btn");

console.log(resultButton, "1111");

let calcObj = {
  number: 0,
  oprator: "",
  nextNumber: 0,
  float: false,
  changeShowData: function () {
    calculateResult.innerHTML = this.number.toString();
  },
};

function calc(e) {
  this.resultShow = e;
  this.number = "";
  this.oprator = "";
  this.preNumber = "";
  this.floatNumber = "";
  this.hasOprator = false;
  this.float = false;
  this.result = "";
  this.updateShowData = () => {
    if (!!this.number) {
      this.resultShow.innerHTML = !this.float
        ? this.number
        : this.number + "." + this.floatNumber;
    } else {
      this.resultShow.innerHTML = "0";
    }
  };
  this.init = (all = false) => {
    if (all) {
      this.number = "";
      this.floatNumber = "";
      this.float = false;
      this.result = "";
    } else {
      this.number = "";
      this.oprator = "";
      this.preNumber = "";
      this.floatNumber = "";
      this.float = false;
      this.hasOprator = false;
      this.result = "";
    }
  };
}

let newCalc = new calc(calculateResult);
console.log(newCalc);

numberArea.addEventListener("click", (e) => {
  if (e.target !== numberArea) {
    let input = e.target.innerHTML;
    if (input !== "C" && input !== ".") {
      if (input === "0" && newCalc.number === "" && !newCalc.float) {
      } else {
        if (!newCalc.float) {
          newCalc.number += input;
          console.log(newCalc);
          newCalc.updateShowData();
        } else {
          newCalc.floatNumber += input;
          console.log(newCalc);
          newCalc.updateShowData();
        }
      }
    } else if (input === "C") {
      newCalc.init();
      newCalc.updateShowData();
    } else {
      if (newCalc.number === "") {
        newCalc.number = "0";
        newCalc.float = true;
        newCalc.updateShowData();
        console.log("111");
      } else {
        newCalc.float = true;
        newCalc.updateShowData();
        console.log("111");
      }
    }
  }
});

opratorArea.addEventListener("click", (e) => {
  if (e.target !== opratorArea) {
    console.log(e.target.dataset);
    newCalc.oprator = e.target.dataset.oprator;
    newCalc.preNumber = calculateResult.innerHTML;
    newCalc.init(true);
    console.log(newCalc);
  }
});

resultButton.addEventListener("click", (e) => {
  if (e.target === resultButton) {
    if (newCalc.oprator !== "") {
      console.log(newCalc.preNumber + newCalc.oprator + newCalc.number);
      let fineResult = eval(
        newCalc.preNumber + newCalc.oprator + newCalc.number
      );
      console.log(fineResult);
      newCalc.preNumber = fineResult.toString(); 
      // newCalc.init(true);
      calculateResult.innerHTML = fineResult;
      console.log(newCalc);
    }
  }
});
