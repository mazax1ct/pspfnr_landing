function checkInput(formEl) {
  formEl.find(':required').each(function() {
      if($(this).val() !== '') {
          $(this).removeClass('error');
          $(this).closest('.input-group').find('.error-text').remove();
      } else {
          $(this).addClass('error');
          $(this).closest('.input-group').find('.error-text').remove();
          $(this).after('<div class="error-text">Заполните поле</div>');
      }
  });
}

$(document).ready(function() {
    $('.js-form').each(function() {
        var form = $(this),
            btn = form.find('button[type="submit"]');

        btn.click(function() {
            checkInput(form);
        });

        form[0].onsubmit = async(e) => {
            e.preventDefault();

            /*let response = await fetch('/local/ajax/main_form.php', {
                method: 'POST',
                body: new FormData(form[0])
            });*/

            //let result = await response.json();

            let result = {
                STATUS: 'ERROR'
            }

            if (result.STATUS == 'ERROR') {
              $('body').append('<div class="popup" data-popup="popup_error"><div class="js-popup-closer popup__shade"></div><div class="popup__body popup__body--bg popup__body--w_855"><button class="js-popup-closer popup__closer" type="button" title="Закрыть"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#close_icon" /></svg></button><div class="popup__logo"><img src="images/content/popup/logo.png" alt=""></div><p class="h2 text-center accent_2-color">Произошла ошибка!</p><p class="h2 text-center">Попробуйте отправить заявку позже или напишите нам на <a href="mailto:info@pspfnr.com">info@pspfnr.com</a></p></div></div>');
              $('body').addClass('is-overflow');
              $('.popup[data-popup="popup_error"]').fadeIn().css('display', 'flex');
            } else {
                form[0].reset();
                $('body').append('<div class="popup" data-popup="popup_success"><div class="js-popup-closer popup__shade"></div><div class="popup__body popup__body--bg popup__body--w_855"><button class="js-popup-closer popup__closer" type="button" title="Закрыть"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#close_icon" /></svg></button><div class="popup__logo"><img src="images/content/popup/logo.png" alt=""></div><p class="h2 text-center">Спасибо за Вашу заявку!</p><p class="h2 text-center accent_1-color">ПРЕДСЕДАТЕЛЬ ППО ВАШЕГО ГОРОДА СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ</p></div></div>');
                $('body').addClass('is-overflow');
                $('.popup[data-popup="popup_success"]').fadeIn().css('display', 'flex');
            }
        };
    });

    $(document).on('change', '[required]', function () {
      if($(this).val() !== '') {
          $(this).removeClass('error');
          $(this).closest('.input-group').find('.error-text').remove();
      } else {
          $(this).addClass('error');
          $(this).closest('.input-group').find('.error-text').remove();
          $(this).after('<div class="error-text">Заполните поле</div>');
      }
    });
});
