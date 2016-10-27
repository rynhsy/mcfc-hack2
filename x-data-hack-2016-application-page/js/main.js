// Counter for main numbers
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function($) {
  // hide answers
  $('.ans').hide();
  $('.qanda').find('.question').click(function(){
    //Expand or collapse this panel
    $(this).next().slideToggle(200);
    //Hide the other panels
    $('ans').not($(this).next()).slideUp(150);
  });
});
