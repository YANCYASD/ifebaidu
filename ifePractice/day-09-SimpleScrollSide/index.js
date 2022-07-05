window.onload = function () {
    var divs = document.querySelectorAll('main div')
    var nav = document.querySelector('.nav')
    var navs = []
    for (var i = 0; i < divs.length; i++) {
        var navItem = document.createElement('div')
        navItem.classList.add('sub')
        navItem.innerHTML = divs[i].className
        navItem.dataset.scrollTop = divs[i].offsetTop
        nav.appendChild(navItem)
        navs.push(navItem)
    }
    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', function () {
            document.documentElement.scroll({top:navs[i].dataset.scrollTop,left:0,behavior:"smooth"});
        })
    }
    function clean(navs) {
        for (var i = 0; i < navs.length; i++) {
            navs[i].classList.remove('current')
        }
    }
    navs[0].classList.add('current')
    console.log(divs[1].offsetTop);
    window.addEventListener('scroll', function () {
        console.log(document.documentElement.scrollTop);
        var scrollT = document.documentElement.scrollTop;
        if (scrollT >= 0 && scrollT < 500) { clean(navs); navs[0].classList.add('current') }
        else if (scrollT >= 500 && scrollT < 1500) { clean(navs); navs[1].classList.add('current') }
        else if (scrollT >= 1500 && scrollT < 3000) { clean(navs); navs[2].classList.add('current') }
    })
}