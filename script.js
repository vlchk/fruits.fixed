let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}


function imgSlider (anything) {
    document.querySelector('.fruits').src = anything;
}

function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}

let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        let c = 0;
        while (c < el.length) {
            el[c++].className = "check";
        }
        el[i].className = "check active";
    }
}