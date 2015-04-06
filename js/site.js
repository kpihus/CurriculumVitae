jQuery(function ($) {
    $('body').on("click",".projectrow .panel-heading", function (e) {
        var arrow = $(this).find('span');
        if ($(arrow).hasClass('panel-collapsed')) {
            // expand the panel
            $(arrow).parents('.panel').find('.panel-body').slideDown();
            $(arrow).removeClass('panel-collapsed');
            $(arrow).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
        else {
            // collapse the panel
            $(arrow).parents('.panel').find('.panel-body').slideUp();
            $(arrow).addClass('panel-collapsed');
            $(arrow).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }
    });
});