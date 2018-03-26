jQuery(document).ready(function () {
    "use strict";
    var options = {};
    options.ui = {
        bootstrap4: true,
        container: "#pwd-container",
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };
    options.common = {
        debug: true,
        onLoad: function () {
            $('#messages').text('Start typing password');
        }
    };
    $(':password').pwstrength(options);
});