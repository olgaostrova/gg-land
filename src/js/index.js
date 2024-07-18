// //импорт стилей
import '../index.css'

$(document).ready(function () {
  $('#S_screen1Mobile').one('click', function () {
    $('.A_imageForward').addClass('None')
    $('.C_action').removeClass('None')
    $('.A_imageBack').removeClass('None')
    $('.A_click').addClass('None')
    setTimeout(function () {
      $('#1').addClass('None')
    }, 100)
    setTimeout(function () {
      $('#2').addClass('None')
    }, 200)
    setTimeout(function () {
      $('#3').addClass('None')
    }, 300)
    setTimeout(function () {
      $('#4').addClass('None')
    }, 400)
    setTimeout(function () {
      $('#5').addClass('None')
    }, 500)
    setTimeout(function () {
      $('#6').addClass('None')
    }, 600)
    setTimeout(function () {
      $('#7').addClass('None')
    }, 700)
    setTimeout(function () {
      $('#8').addClass('None')
    }, 800)
    setTimeout(function () {
      $('#9').addClass('None')
    }, 900)
    setTimeout(function () {
      $('#10').addClass('None')
    }, 1000)
    setTimeout(function () {
      $('#11').addClass('None')
    }, 1100)
    setTimeout(function () {
      $('#12').addClass('None')
    }, 1200)
    setTimeout(function () {
      $('#13').addClass('None')
    }, 1300)
    setTimeout(function () {
      $('#14').addClass('None')
    }, 1400)
    setTimeout(function () {
      $('#15').addClass('None')
    }, 1500)
    setTimeout(function () {
      $('#16').addClass('None')
    }, 1600)
    setTimeout(function () {
      $('#17').addClass('None')
    }, 1700)
    setTimeout(function () {
      $('#18').addClass('None')
    }, 1800)
    setTimeout(function () {
      $('#19').addClass('None')
    }, 1900)
    setTimeout(function () {
      $('#20').addClass('None')
    }, 2000)
    setTimeout(function () {
      $('#21').addClass('None')
    }, 2100)
    setTimeout(function () {
      $('#22').addClass('None')
    }, 2200)
    setTimeout(function () {
      $('#23').addClass('None')
    }, 2300)
    setTimeout(function () {
      $('#24').addClass('None')
    }, 2400)
    setTimeout(function () {
      $('.A_headerLogo,  .C_headerMenu, .A_bookHeader').removeClass('Opacity')
      $(
        '.C_cards, .O_cardsMobile, #S_screen2Mobile, #S_screen3, #S_screen4, #S_screen5, #S_screen6, #S_screen7'
      ).removeClass('None')
    }, 2800)
  })

  $('#S_screen1').one('click', function () {
    $('.first_loop').addClass('None')
    $('.A_click').addClass('None')
    $('.final_loop').removeClass('None')
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

  $('.as_forward').click(function () {
    $(this).addClass('None')
    $('.as_back').removeClass('None')
  })

  $('.as_back').click(function () {
    $(this).addClass('None')
    $('.as_forward').removeClass('None')
  })

  $('.gg_forward').click(function () {
    $(this).addClass('None')
    $('.gg_back').removeClass('None')
  })

  $('.gg_back').click(function () {
    $(this).addClass('None')
    $('.gg_forward').removeClass('None')
  })

  $('.ppv_forward').click(function () {
    $(this).addClass('None')
    $('.ppv_back').removeClass('None')
  })

  $('.ppv_back').click(function () {
    $(this).addClass('None')
    $('.ppv_forward').removeClass('None')
  }),
    $('#as_button').click(function () {
      $('#as_text').removeClass('None')
      $('#ppv_text').addClass('None')
      $('#gg_text').addClass('None')
      $('#as_icon').addClass('A_iconServiceOnClick')
      $('#ppv_icon').removeClass('A_iconServiceOnClick')
      $('#gg_icon').removeClass('A_iconServiceOnClick')
    })

  $('#ppv_button').click(function () {
    $('#ppv_text').removeClass('None')
    $('#as_text').addClass('None')
    $('#gg_text').addClass('None')
    $('#ppv_icon').addClass('A_iconServiceOnClick')
    $('#as_icon').removeClass('A_iconServiceOnClick')
    $('#gg_icon').removeClass('A_iconServiceOnClick')
  })

  $('#gg_button').click(function () {
    $('#gg_text').removeClass('None')
    $('#ppv_text').addClass('None')
    $('#as_text').addClass('None')
    $('#gg_icon').addClass('A_iconServiceOnClick')
    $('#as_icon').removeClass('A_iconServiceOnClick')
    $('#ppv_icon').removeClass('A_iconServiceOnClick')
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

  // const button = document.querySelector('contactEmail') //сама кнопка
  // $(function () {
  //   $(document).on('click', 'button', function () {
  //     navigator.clipboard.writeText('Blak.smoke.sol@gmail.com')
  //     $('.A_copied').removeClass('None')
  //     setTimeout(function () {
  //       $('.A_copied').addClass('None')
  //     }, 3390)
  //   })
  // })
})
