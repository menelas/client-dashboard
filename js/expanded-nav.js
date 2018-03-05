(function($) {
    $('.nav-has-sub').click(function(){
        var ww = $(window).width();
        if(ww > 767){
            $('.nav-has-sub .non-sub-item').css({'opacity':'0'});
            $('.nav-has-sub').addClass('remove-border');
            $('.nav-has-sub .expanded-menu').addClass('d-flex');
            $('.nav-sub-effected').addClass('remove-border');
            $('.collapse-menu').addClass('d-flex');
        }else{
            var ww = $(window).width();
            var hw = $(window).height();
            $('.expanded-menu').height(hw);
            $('.expanded-menu').width(ww);
            $('.expanded-menu').addClass("m-collapsed d-flex");
            $('#close-sub-p').show();
        }
    });
    $('#close-sub-p').on('click', (function(){
        $('.expanded-menu').removeClass("m-collapsed d-flex");
        $(this).hide();
    }));
    $(window).on('resize', function(){

    });
})(jQuery);