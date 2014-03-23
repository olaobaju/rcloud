RCloud.UI.right_panel = (function() {
    var collapsed_ = false;

    var result = RCloud.UI.column("#right-column, #fake-right-column", 4);
    _.extend(result, {
        hide: function() {
            result.colwidth(1);
            $("#right-pane-collapser i").addClass("icon-plus").removeClass("icon-minus");
            RCloud.UI.middle_column.update();
            collapsed_ = true;
        },
        show: function() {
            result.colwidth(4);
            $("#right-pane-collapser i").removeClass("icon-plus").addClass("icon-minus");
            RCloud.UI.middle_column.update();
            collapsed_ = false;
        },
        init: function() {
            var that = this;
            $("#accordion-right").on("show.bs.collapse", function() {
                if (collapsed_)
                    that.show();
            });
            $("#accordion-right").on("shown.bs.collapse", function() {
                $(".right-panel-shadow").each(function(v) {
                    var h = $(this).parent().height();
                    if (h === 0)
                        h = "100%";
                    $(this).attr("height", h);
                });
            });
            $("#right-pane-collapser").click(function() {
                if (collapsed_)
                    that.show();
                else {
                    // the following actually makes sense to me. oh no what has my life become
                    $("#accordion-right > .panel > div.panel-collapse:not(.collapse):not(.out)").collapse('hide');
                    that.hide();
                }
            });
        }
    });
    return result;
}());
