'use strict';

const sliderItems = document.querySelector('.slider__items'),
    parentSlider = document.querySelector('.slider'),
    dotsWrap = document.getElementsByClassName('slider__dots')[0],
    dots = document.getElementsByClassName('dot');

let left = -390,
    itemWidth = 390;

// start slider
sliderItems.style.left = left + 'px';

const sliderTo = (direction) => {
    if (direction == 'left') {
        left -= itemWidth;
    }
    if (direction == 'right') {
        left += itemWidth;
    }
    if (left < -880) {
        left = 0;
    }
    if (left > 0) {
        left = -880;
    }

    for (let item of dots) {
        item.classList.remove('active');
    }

    
    switch (left) {
        case 0:
            dots[0].classList.add('active');
            break;
        case -390:
            dots[1].classList.add('active');
            break;
        case -780:
            dots[2].classList.add('active');
            break;
    }

    sliderItems.style.left = left + 'px';

};

let timerId = setInterval(function(){
    sliderTo('left');
}, 2000);

parentSlider.addEventListener('click', () => {
    clearInterval(timerId);
    sliderTo('left');
});



dotsWrap.addEventListener('click', (e) => {
    clearInterval(timerId);
    let target = e.target;

    for (let item of dots) {
        item.classList.remove('active');
    }
    if (target.classList.contains('dot')) {
        target.classList.add('active');
    }

    switch (target) {
        case dots[0]:
            left = 0;
            break;
        case dots[1]:
            left = -390;
            break;
        case dots[2]:
            left = -780;
            break;
    }
    
    sliderItems.style.left = left + 'px';
});
