$(function() {
    var $window  = $(window);
    var width    = $window.width();a
    $('#IMG').draggable();
    $('#IMG').click(function(){
        var screen = (width < 730) ? 'IMG2' : 'IMG1';
        if ($(this).text() == 'ON') {
            $(this).text('OFF');
            $('#'+screen).hide();
        } else {
            $(this).text('ON');
            $('#'+screen).show();
        }

    });
});