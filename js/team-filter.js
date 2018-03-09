var options = { valueNames: [ 'memberName','memberDepart','memberProfile','memberEmail', 'memberPhone' ] };
var teamList = new List('all-team', options);
(function($) {
    $('.category_s').change(function () {
        var selection = this.value;
        if (selection) {
            teamList.filter(function(item) {
                return (item.values().memberDepart == selection);
            });
        } else {
            teamList.filter();
        }
    });
})(jQuery);