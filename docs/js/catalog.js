// ======================================================

// слайды Типы лестниц
const swiper = new Swiper('.company-typesStairs__swiper', {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: '.company-typesStairs__btn-next',
        prevEl: '.company-typesStairs__btn-prev',
    },

    pagination: {
        el: '.company-typesStairs__swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

        

        992:{
            slidesPerView: 3,
            spaceBetween: 40,
        }
        
    }
});

// слайды отзывы
const swiper2 = new Swiper('.company-reviews__swiper', {
    slidesPerView:1,
    loop:true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    

    // Navigation arrows
    navigation: {
        nextEl: '.company-reviews__btn-next',
        prevEl: '.company-reviews__btn-prev',
    },

    pagination: {
        el: '.company-reviews__swiper-pagination',
        clickable: true,

    },

    
});


const btn3 = document.querySelector('.company-header__button')
const btn4 = document.querySelectorAll('.company-form__button')
const btn5 = document.querySelector('.footer__button')
const btn6 = document.querySelector('.location__button')

const modal5 = document.querySelector('.modal5')
const modal5_2 = document.querySelector('.modal5-2')

const btn_closed5 = document.querySelector('.modal5__close-btn5')
const btn_closed5_2 = document.querySelector('.modal5-2__close-btn5')
const btn_send = document.querySelector('.modal5__btn')


btn6.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})
btn3.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})
btn4.forEach(btn => {
    btn.addEventListener('click', () => {
        modal5.classList.add('modal--open');
    });
});
btn5.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})

btn_closed5.addEventListener('click', () => {
    modal5.classList.remove('modal--open')
})
btn_closed5_2.addEventListener('click', () => {
    modal5_2.classList.remove('modal--open')
})

btn_send.addEventListener('click', () => {
    modal5.classList.remove('modal--open')
    modal5_2.classList.add('modal--open')
});

$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
});



//Вызов бургер меню ====================================
(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return

        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

        
    }

})()