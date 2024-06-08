/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// //импорт стилей

$(document).ready(function () {
  $('.A_gifForward').click(function () {
    $('.A_gifForward').addClass('None');
    $('.A_gif').removeClass('None');
    setTimeout(function () {
      $('.A_gif').addClass('None');
      $('#header, #S_screen_2_mobile, #S_screen3, #S_screen4, #S_screen5, #S_screen6, #S_screen7').removeClass('None');
    }, 3390);
  });
  $('.first_loop').click(function () {
    $('.first_loop').addClass('None');
    $('.A_click').addClass('None');
    $('.video').get(0).play();
    $('.C_videos').css('cursor', 'auto');
    setTimeout(function () {
      $('.video').addClass('None');
      $('.C_cards').removeClass('None');
      $('.final_loop').get(0).play();
      $('.final_loop').css('loop', 'loop');
      $('#header, #S_screen_2_mobile, #S_screen3, #S_screen4, #S_screen5, #S_screen6, #S_screen7').removeClass('None');
    }, 3390);
  });

  // $('#contactEmail').click(function () {
  //   var textToCopy = $(this).text()
  //   copyToClipboard(textToCopy)
  //   alert('Скопировано')
  // })

  // function copyToClipboard(text) {
  //   var $temp = $('<textarea>')
  //   $('body').append($temp)
  //   $temp.val(text).select()
  //   document.execCommand('copy')
  //   $temp.remove()
  // }

  var button = document.querySelector('contactEmail'); //сама кнопка
  $(function () {
    $(document).on('click', 'button', function () {
      navigator.clipboard.writeText('Blak.smoke.sol@gmail.com');
      $('.A_copied').removeClass('None');
      setTimeout(function () {
        $('.A_copied').addClass('None');
      }, 3390);
    });
  });
});
/******/ })()
;