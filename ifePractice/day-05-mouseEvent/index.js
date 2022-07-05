var container = document.querySelector("#container");

for (var i = 0; i < 594; i++) {
  var item = document.createElement("div");
  item.classList.add("item");
  container.append(item);
}

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

function color() {
  var g = randomNum(0, 255);
  var b = randomNum(0, 255);
  var r = randomNum(0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

container.addEventListener("mouseover", (e) => {
  if (e.target !== container) {
    e.target.style.backgroundColor = color();
    e.target.style.transition = "none";
    e.target.classList.add("current");
  }
});

container.addEventListener("mouseout", (e) => {
  if (e.target !== container) {
    e.target.style.backgroundColor = "rgb(40,40,40)";
    e.target.classList.remove("current");
    e.target.style.transition = "background-color .5s";
  }
});
