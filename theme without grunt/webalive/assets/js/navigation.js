;(function($) {
    "use strict";
    var windowWidth = 991;
    
    $( '.webalive-inline-menu li' ).find( '.sub-menu' ).addClass('hide');
    $( '.webalive-inline-menu li' ).find( '> .sub-menu' ).before('<span class="mb-toggle"><i class="fas fa-chevron-down"></i></span>');

    // For Larger Devices
    if( $(window).width() > windowWidth ) {
        $( document.body ).on('mouseover', '.webalive-inline-menu li',
            function(e) {
                e.preventDefault();
                $( 'li > .sub-menu', this ).stop( true, true );
                $(this).find('> .sub-menu').removeClass('hide').addClass('open');
            }
        );
        $( document.body ).on('mouseleave', '.webalive-inline-menu li',
            function(e) {
                e.preventDefault();
                $( 'li > .sub-menu', this ).stop( true, true );
                $(this).find('> .sub-menu').removeClass('open').addClass('hide');
            }
        );
    }
    // For Smaller Devices
    if( $(window).width() < windowWidth ) {
        $( '.webalive-main-menu' ).addClass('hide');

        $('.webalive-navbar-toggler').on('click', function(e) {
            $( '.webalive-main-menu' ).removeClass('hide');
            $( '.webalive-main-menu' ).toggleClass('open');
            $(this).find('.fas').toggleClass('fa-times');
        });
        $( '.mb-toggle' ).on('click', function(e) {
            e.preventDefault();
            $(this).parent().find(' > .sub-menu').toggleClass('hide');
            $(this).parent().find(' > .sub-menu').toggleClass('open');
            $(this).find('.fas').toggleClass('fa-chevron-up');
        });
    }

    // Scroll to fixed top
    $(window).on('scroll', function(e) {
        var scrollTop = $(window).scrollTop();
        var topMenu = $('.webalive-navbar');
        if( scrollTop > 0 ) {
            topMenu.addClass('fixed-to-top');
        }else {
            topMenu.removeClass('fixed-to-top');
        }
    })
    
    
})(jQuery);