var container = document.querySelector(".container");
var moveItem = document.querySelector(".move_item");
var containerWidth = container.scrollWidth;
var moveItemWidth = moveItem.scrollWidth;
var containerHeight = container.scrollHeight;
var moveItemHeight = moveItem.scrollHeight;
var pressKey = {}

window.addEventListener("keyup",(e)=>{
    pressKey[e.keyCode] = false;
})

window.addEventListener("keydown", (e) => {
  //   console.log(e.keyCode);
    pressKey[e.keyCode] = true
  console.log(window.event.ctrlKey);
  var step = 10;
  if(window.event.ctrlKey){
    step = 30;    
  }
  switch (pressKey[e.keyCode] && e.keyCode) {
    case 37:
      if (moveItem.offsetLeft - step > 0) {
        moveItem.style.left = moveItem.offsetLeft - step + "px";
      }else {
        moveItem.style.left = 0
      }
      break;
    case 39:
      if (moveItem.offsetLeft + step < containerWidth - moveItemWidth) {
        moveItem.style.left = moveItem.offsetLeft + step + "px";
      }else {
        moveItem.style.left = containerWidth - moveItemWidth + "px";
      }
      break;
    case 38:
      if (moveItem.offsetTop - step > 0) {
        moveItem.style.top = moveItem.offsetTop - step + "px";
      }
      else {
        moveItem.style.top = 0;
      }
      break;
    case 40:if (moveItem.offsetTop + step < containerHeight - moveItemHeight) {
      moveItem.style.top = moveItem.offsetTop + step + "px";
      }
      else {
        moveItem.style.top = containerHeight - moveItemHeight + "px";;
      }
      break;
    default:
      break;
  }
});

// 37
// bundle.js:10233 38
// bundle.js:10233 39
// bundle.js:10233 40
