var sliderEl = document.getElementById('slider');
var uprrowEl = document.getElementById('up-arrow');
var downrrowEl = document.getElementById('down-arrow');

let x = 0;

uprrowEl.addEventListener('click', function() {
    if (x > -900) {
        x -= 300;
        sliderEl.style.top = x + "px";
    }
});

downrrowEl.addEventListener('click', function() {
    if (x < 0) {
        x += 300;
        sliderEl.style.top = x + "px";
    }
});