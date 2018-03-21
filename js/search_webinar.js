var options = {
    valueNames: [ 'category', 'role', 'job' ]
};
var webList = new List('search-webinars', options);

(function($) {
    $('.search_w').change(function () {
        var selection = this.value;
        if (selection) {
            webList.filter(function(item) {
                return (item.values().category == selection);
            });
        } else {
            webList.filter();
        }
    });
    function sidebarWebinar(){
        var videoWrap = $('.video-wrap').height();
        var webinarInfo = $('.webinar-info').height();
        var webTitle = $('.prev-webinbar').height();
        var pSearch = $('.p-search-wrap').height();
        var searchW = $('.search_w').height();
        var hc = (videoWrap+webinarInfo) - (webTitle + pSearch + searchW);
        if( hc > 600 ){
            $('.col-results').css({'min-height': hc+'px'});
        }
    }
    sidebarWebinar();
    $(window).on('resize', function(){
        sidebarWebinar();
    });
})(jQuery);