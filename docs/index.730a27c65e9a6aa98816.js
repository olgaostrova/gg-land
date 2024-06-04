/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// //импорт стилей

$(document).ready(function () {
  $('#S_screen1').click(function () {
    $('.first_loop').addClass('None');
    $('.video').get(0).play();
    setTimeout(function () {
      $('.video').addClass('None');
      $('.C_cards').removeClass('None');
      $('.final_loop').get(0).play();
      $('.final_loop').css('loop', 'loop');
    }, 3390);
  });
});
/******/ })()
;