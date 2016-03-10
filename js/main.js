$('.calendar').datepicker({
    todayHighlight: true
});
var datepicker_text = $('.datepicker-switch').html().split(' ');
$('.datepicker-switch').html('<span>'+datepicker_text[0]+'</span><br /><span>'+datepicker_text[1]+'</span>');

var datepicker_prev = $('.prev').html().split(' ');
$('.prev').html('<span>'+datepicker_prev[0]);

var datepicker_next = $('.next').html().split(' ');
$('.next').html('<span>'+datepicker_next[0]);

//$( document ).ready(function() {
//    $(window).scroll(function(){
//        var sticky = $('.cabinet__right-column'),
//            scroll = $(window).scrollTop();
//
//        if (scroll >= 50) sticky.addClass('cabinet__right-column__scroll');
//        else sticky.removeClass('cabinet__right-column__scroll');
//    });
//});