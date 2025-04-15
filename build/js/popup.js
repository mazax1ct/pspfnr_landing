$(document).on('click', '.js-popup-opener', function () {
  $('body').addClass('is-overflow');
  $('.popup[data-popup="'+$(this).attr('data-popup')+'"]').fadeIn().css('display', 'flex');
  return false;
});

$(document).on('click', '.js-popup-closer', function () {
  $('.popup').fadeOut(function() {
    $('body').removeClass('is-overflow');
  });
  return false;
});
