$(document).ready(function(){

    var $window  = $(window);
    var width    = $window.width();
    var isRetina = ('devicePixelRatio' in window && window.devicePixelRatio == 2) ? true : false;

    if (isRetina) {
        replace_2x();
    }

    $window.resize(function(){

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