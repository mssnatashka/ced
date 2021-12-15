"use strict";

$(window).keyup(function (e) {
  var target = $('.checkbox__label .checkbox__input:focus');

  if (e.keyCode == 9 && $(target).length) {
    $(target).parent().addClass('focused');
  }
});
$('.checkbox__label .checkbox__input').focusout(function () {
  $(this).parent().removeClass('focused');
});
//# sourceMappingURL=main.dev.js.map
