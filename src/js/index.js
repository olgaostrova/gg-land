// //импорт стилей
import '../index.css'

$(document).ready(function () {
  $('#S_screen1').click(function () {
    $('.first_loop').addClass('None')
    $('.video').get(0).play()
    $('.C_videos').css('cursor', 'auto')

    setTimeout(function () {
      $('.video').addClass('None')
      $('.C_cards').removeClass('None')
      $('.final_loop').get(0).play()
      $('.final_loop').css('loop', 'loop')
    }, 3390)
  })

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

  const button = document.querySelector('contactEmail') //сама кнопка
  $(function () {
    $(document).on('click', 'button', function () {
      navigator.clipboard.writeText('Blak.smoke.sol@gmail.com')
      $('.A_copied').removeClass('None')
      setTimeout(function () {
        $('.A_copied').addClass('None')
      }, 3390)
    })
  })
})
