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
})(jQuery);