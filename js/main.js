$(document).ready(function(){
    //Menu Toggle
    $('.hamburger').on('click', function(){
        $('aside').addClass('show_sidebar');
        $(this).css('visibility','hidden');
    });

    $('.close_menu').on('click', function(){
        $('aside').removeClass('show_sidebar');
        $('.hamburger').css('visibility','visible')
    })
    
})