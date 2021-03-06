(function($) {
    $('.btn-open').click(function(){
        $('#hamburger-nav').show();
        $('#hamburger-nav').css({'top':'0', 'right':'0'});
        $('.btn-open').hide(200);
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
    $(document).click(function(e){
        if ( $(e.target).closest('.expanded-menu').length === 0 && $(e.target).closest('.nav-has-sub').length === 0 ) {
            $('.non-sub-item').css({'opacity':'1'});
            $('.nav-has-sub').removeClass('remove-border');
            $('.expanded-menu').removeClass('d-flex');
            $('.nav-sub-effected').removeClass('remove-border');
            $('.collapse-menu').removeClass('d-flex');
        }
    });
    $('.btn-search').click(function(){
            setTimeout(function(){  $(".autofocus-search").focus(); }, 1000);
    });
})(jQuery);