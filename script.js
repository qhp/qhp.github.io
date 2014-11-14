$(document).ready(function() {

    $('body').addClass('js-enabled');

    var $window  = $(window);
    var width    = $window.width();
    var isRetina = ('devicePixelRatio' in window && window.devicePixelRatio == 2) ? true : false;

    if (isRetina) {
        replace_2x();
    }

    $window.resize(function(){

    });

    $('.checkbox').on('click', function() {
        $('.checkbox').removeClass("checked");
        $(this).addClass("checked");
        $('#checkout-type').val($(this).data('type'));
    });

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

    $('.input-row input').change(function(){
        if ($(this).val().length > 0)
            $(this).addClass('input-not-empty');
        else
            $(this).removeClass('input-not-empty');
    });
});

function replace_2x() {

    var img_to_replace = jQuery( 'img.replace-2x' ).get();

    for (var i=0,l=img_to_replace.length; i<l; i++) {
        var src = img_to_replace[i].src;
        src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
        img_to_replace[i].src = src;
    };
}