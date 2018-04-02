(function($) {
    $('#custom-calendar').datepicker({
        inline: true,
        sideBySide: true,
        todayHighlight: true,
        beforeShowDay: function(d_date){
            var d_picker = new Date(d_date);
            var s_class_highlight = '';
            console.log(d_picker.getMonth());
            if( d_picker.getMonth() == '2' && (d_picker.getDate() == '14' || d_picker.getDate() == '22' || d_picker.getDate() == '30') ){
                s_class_highlight = 'cell_highlight';
                return { classes: s_class_highlight };
            } else {
                return;
            }
        }
    });
})(jQuery);