'use strict';

const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__list');

burger.addEventListener('click', function(e){
   burger.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   document.body.classList.toggle('_lock');
});

new Swiper('.stories-slider',{
   grabCursor: true,
   slidesPerView: 'auto',
   watchOverflow: true,
});
