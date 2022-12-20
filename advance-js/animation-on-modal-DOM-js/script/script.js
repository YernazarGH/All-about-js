$(document).ready(function() {
    $('a[href="#sheldure"], .main_btn, .main_btna').on('click',function(){
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
        // анимация по движению модального окна написанная с методам animate()
        // $('.modal').animate(
        //     {
        //         height: 'toggle'
        //     },1000
        // );    
    });
    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
        // анимация по движению модального окна написанная с методам animate()
        // $('.modal').animate(
        //     {
        //         height: 'toggle'
        //     },1000
        // );
    })
});
