// //импорт стилей
import '../index.css'

$(document).ready(function () {
  $('#S_screen_1_mobile').one('click', function () {
    $('.A_gifForward').addClass('None')
    $('.A_click').addClass('None')
    setTimeout(function () {
      $('#1').addClass('None')
    }, 125)
    setTimeout(function () {
      $('#2').addClass('None')
    }, 250)
    setTimeout(function () {
      $('#3').addClass('None')
    }, 375)
    setTimeout(function () {
      $('#4').addClass('None')
    }, 500)
    setTimeout(function () {
      $('#5').addClass('None')
    }, 625)
    setTimeout(function () {
      $('#6').addClass('None')
    }, 750)
    setTimeout(function () {
      $('#7').addClass('None')
    }, 875)
    setTimeout(function () {
      $('#8').addClass('None')
    }, 1000)
    setTimeout(function () {
      $('#9').addClass('None')
    }, 1125)
    setTimeout(function () {
      $('#10').addClass('None')
    }, 1250)
    setTimeout(function () {
      $('#11').addClass('None')
    }, 1375)
    setTimeout(function () {
      $('#12').addClass('None')
    }, 1500)
    setTimeout(function () {
      $('#13').addClass('None')
    }, 1625)
    setTimeout(function () {
      $('#14').addClass('None')
    }, 1750)
    setTimeout(function () {
      $('#15').addClass('None')
    }, 1875)
    setTimeout(function () {
      $('#16').addClass('None')
    }, 2000)
    setTimeout(function () {
      $('#17').addClass('None')
    }, 2125)
    setTimeout(function () {
      $('#18').addClass('None')
    }, 2250)
    setTimeout(function () {
      $('#19').addClass('None')
    }, 2375)
    setTimeout(function () {
      $('#20').addClass('None')
    }, 2500)
    setTimeout(function () {
      $('#21').addClass('None')
    }, 2625)
    setTimeout(function () {
      $('#22').addClass('None')
    }, 2750)
    setTimeout(function () {
      $('#23').addClass('None')
    }, 2875)
    setTimeout(function () {
      $('#24').addClass('None')
    }, 3000)
    setTimeout(function () {
      $('.A_gif').addClass('None')
      $('.A_headerLogo,  .C_headerMenu, .A_bookHeader').removeClass('Opacity')
      $(
        '.C_cards, #S_screen_2_mobile, #S_screen3, #S_screen4, #S_screen5, #S_screen6, #S_screen7'
      ).removeClass('None')
    }, 3200)
  })

  $('.A_footerLogo').one('click', function () {
    $('.first_loop').addClass('None')
    $('.A_click').addClass('None')
    $('.video').get(0).play()
    $('.C_videos').css('cursor', 'auto')

    setTimeout(function () {
      $('.video').addClass('None')
      $('.C_cards').removeClass('None')
      $('.A_headerLogo,  .C_headerMenu, .A_bookHeader').removeClass('Opacity')

      $('.final_loop').get(0).play()
      $('.final_loop').css('loop', 'loop')
      $(
        '#S_screen_2_mobile, #S_screen3, #S_screen4, #S_screen5, #S_screen6, #S_screen7'
      ).removeClass('None')
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
