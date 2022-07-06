window.onload = function () {
  var divs = document.querySelectorAll("main div");
  var nav = document.querySelector(".nav");
  var navs = [];
  var divsBorderline = []
  for (var i = 0; i < divs.length; i++) {
    var navItem = document.createElement("div");
    navItem.classList.add("sub");
    navItem.innerHTML = divs[i].className;
    navItem.dataset.scrollTop = divs[i].offsetTop;
    divsBorderline.push(divs[i].offsetTop + divs[i].offsetHeight/2); 
    nav.appendChild(navItem);
    navs.push(navItem);
  }
  console.log(divsBorderline);
  for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function () {
      document.documentElement.scroll({
        top: navs[i].dataset.scrollTop,
        left: 0,
        behavior: "smooth",
      });
    });
  }
  function clean(navs) {
    for (var i = 0; i < navs.length; i++) {
      navs[i].classList.remove("current");
    }
  }
  navs[0].classList.add("current");
  // console.log(divs[1].offsetTop);
  window.addEventListener("scroll", function (e) {
    // console.log(e);
    console.log(document.documentElement.scrollTop);
    var scrollT = document.documentElement.scrollTop;
    console.log(findIndexByRange(divsBorderline,scrollT));
    let i =findIndexByRange(divsBorderline,scrollT);
    clean(navs);
    navs[i].classList.add("current")
  });


  function findIndexByRange(rangeArray,value) {
    let index = 0;
    rangeArray.forEach((intervelVal,intervelIndex) => {
      if(value > intervelVal){
        index = intervelIndex + 1;
      }
    });
    if(index === rangeArray.length) {
      index -= 1; 
    }
    return index;
  }
};



