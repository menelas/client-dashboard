var options = { valueNames: [ 'category' ] };
var catList = new List('latest-news', options);
(function($) {
    $('.category_s').change(function () {
        var selection = this.value;
        if (selection) {
            catList.filter(function(item) {
                return (item.values().category == selection);
            });
        } else {
            catList.filter();
        }
    });
})(jQuery);