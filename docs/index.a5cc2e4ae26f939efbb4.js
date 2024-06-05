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
  $('#contactEmail').click(function () {
    var textToCopy = $(this).text();
    copyToClipboard(textToCopy);
    alert('Скопировано');
  });
  function copyToClipboard(text) {
    var $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).select();
    document.execCommand('copy');
    $temp.remove();
  }
});
/******/ })()
;