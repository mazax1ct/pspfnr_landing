$(document).ready(function() {

});

//табы
$(document).on('click', '.js-tab', function() {
  $(this).closest('.tabs').find('.js-tab').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-tab="'+$(this).attr('data-tab')+'"]').addClass('is-active');
  return false;
});
