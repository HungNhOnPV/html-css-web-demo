$(function() {
    $(window).scroll(function() {

        if($('html').scrollTop() > 100) {
            $('.logo').addClass('textOrange');
            $('.buttonTop').addClass('display');
            $('.menuTop').addClass('backgroundWhite');
            $('.menuRight').addClass('colorBlack');
            $('.buttonSignUp').addClass('buttonJquery');
        } else {
            $('.logo').removeClass('textOrange');
            $('.buttonTop').removeClass('display');
            $('.menuTop').removeClass('backgroundWhite');
            $('.menuRight').removeClass('colorBlack');
            $('.buttonSignUp').removeClass('buttonJquery');
        }
    });

    $('button').click(function() {
        $('html').animate({scrollTop: 0});
    })
});