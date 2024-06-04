// //импорт стилей
import '../index.css'

$(document).ready(function () {
  $('#S_screen1').click(function () {
    $('.first_loop').addClass('None')
    $('.video').get(0).play()
    setTimeout(function () {
      $('.video').addClass('None')
      $('.C_cards').removeClass('None')
      $('.final_loop').get(0).play()
      $('.final_loop').css('loop', 'loop')
    }, 3390)
  })
})
