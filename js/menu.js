(function($) {
    $('.btn-open').click(function(){
        var ww = $(window).width();
        if(ww > 767){
            $('#hamburger-nav').show();
            $('#hamburger-nav').css({'top':'0', 'right':'0'});
            $('.btn-open').hide(200);
        }else{
            var hw = $(window).height();
            $('#hamburger-nav').height(hw);
            $('#hamburger-nav').width(ww);
            $('#hamburger-nav').addClass("m-collapsed d-flex align-items-center justify-content-center flex-column");
            $('#hamburger-nav').show();
            $('#hamburger-nav').css({'top':'0', 'right':'0'});
            $('.btn-open').hide(200);
        }
    });
    $('#btn-close').click(function(){
        $('#hamburger-nav').hide();
        $('#hamburger-nav').css({'top':'-200px', 'right':'-200px'});
        $('.btn-open').show();
        $('#hamburger-nav').removeClass("m-collapsed d-flex align-items-center justify-content-center flex-column");
    });
    $(document).click(function(e){
        if ( $(e.target).closest('#hamburger-nav').length === 0 && $(e.target).closest('.btn-open').length === 0 ) {
            $('#hamburger-nav').hide();
            $('.btn-open').show();
        }
    });
    $('.btn-search').click(function(e){
        e.preventDefault();
        $('.search-nav-wrap .form-s-wrap').addClass('f-expanded');
        $('.search-nav-wrap form input.input-md').focus();
        $('.search-nav-wrap form').show();
    });
    $('.item-box h4').click(function(e){
        $(this).parents('.item-box').addClass("p-a-actived");
        $(this).siblings('.btn-learn-more').addClass("a-actived");
        $(this).siblings('.btn-learn-more').show();
    });
    $(document).click(function(e){
        if ( $(e.target).closest('.p-a-actived').length === 0 && $(e.target).closest('.a-actived').length === 0 ) {
            $('.a-actived').hide();
        }
    });
    $(document).click(function(e){
        if ( $(e.target).closest('.expanded-menu').length === 0 && $(e.target).closest('.nav-has-sub').length === 0 ) {
            $('.non-sub-item').css({'opacity':'1'});
            $('.nav-has-sub').removeClass('remove-border');
            $('.expanded-menu').removeClass('d-flex');
            $('.nav-sub-effected').removeClass('remove-border');
            $('.collapse-menu').removeClass('d-flex');
        }
    });
})(jQuery);