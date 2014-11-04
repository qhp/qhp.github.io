$(function(){
    var $window = $(window);
    $window.resize(function(){

        var width = $window.width();
        var isRetina = ('devicePixelRatio' in window && window.devicePixelRatio == 2) ? true : false;

        if (isRetina) {
            replace_2x();
        }
    });
});

function replace_2x() {

    var img_to_replace = jQuery( 'img.replace-2x' ).get();

    for (var i in img_to_replace) {
        var src = img_to_replace[i].src;
        src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
        img_to_replace[i].src = src;
    }
}