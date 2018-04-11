// ACCORDION TABS
$(document).ready(() => {
  $('.accordion').children('.accordion__tab').first().children('.accordion__tab-link').addClass('accordion__tab-active').next().addClass('is-open').show();
})

$('.accordion').on('click', 'li > a', function() {
  console.log(this);
  if (!$(this).hasClass('active')) {
    $('.accordion .is-open').removeClass('is-open').hide();
    $(this).next().toggleClass('is-open').toggle();

    $('.accordion').find('.accordion__tab-active').removeClass('accordion__tab-active');
    $(this).addClass('accordion__tab-active');
  }
})

// HEADER BAR
$('.header__text').on('click', () => {
  console.log('menu clicked');
  $('.dropdown__cont').toggle();
})

