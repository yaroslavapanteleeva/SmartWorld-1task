/* const line = document.querySelector('.line');
const slides = document.querySelectorAll('.reviews__item');
const slider = document.querySelector('.reviews__slider');

const sliderWidth = slider.offsetWidth;
let lineWidth = 0;


const widthArr = [0];

for (let i=0;i<slides.length;i++) {
    widthArr.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}

lineWidth = lineWidth + 60;

line.style.width = lineWidth + 'px';

console.log(widthArr);

let offset = 0;
let step = 0;
let res = 0;

console.log(lineWidth);
console.log(sliderWidth);

document.onclick = function() {
    res = lineWidth - sliderWidth;

    if (res >= 0) {
        offset = offset+widthArr[step];
        line.style.left = -offset+'px';
    } else {
        line.style.left = - (lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }

    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    } else {
        step++;
    }
    
}; */

const fieldClick = document.querySelector('.reviews');
const slides = document.querySelectorAll('.reviews__item');
let slider = [];

for (let i=0; i< slides.length;i++) {

}

fieldClick.addEventListener('click', () => {
    
});

