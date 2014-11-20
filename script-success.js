$(function() {

    $('#video img').click(function() {
        $(this).hide();
        $('#my-video').removeClass('hide-video');
        var myPlayer = document.getElementById('my-video');
        myPlayer.playVideo();
    });





    var $window  = $(window);
    var width    = $window.width();
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