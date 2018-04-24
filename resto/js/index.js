'use strict';

var navList = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('main-nav__list--opened');
  navToggle.classList.toggle('main-nav__toggle--opened');
});