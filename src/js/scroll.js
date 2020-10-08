'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const goToBtn = document.querySelector('.pageup');

    
    function traskScroll() {
        const scrolled = window.pageYOffset,
            coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goToBtn.classList.add('pageup__show');
        }
        if (scrolled < coords) {
            goToBtn.classList.remove('pageup__show');
        }
    }

    function pageToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(pageToTop, 0);
        }
    }

    window.addEventListener('scroll', traskScroll);
    goToBtn.addEventListener('click', pageToTop);

    //active menu

    /* const menuWrap = document.getElementsByClassName('menu')[0],
        menuItem = document.getElementsByClassName('menu__link');


    menuWrap.addEventListener('click', (e) => {
        let target = e.target;
    
        for (let item of menuItem) {
            item.classList.remove('menu__link_active');
        }
        if (target.classList.contains('menu__link')) {
            target.classList.add('menu__link_active');
        }
    }); */
});

