var path = '/animation',
    svgs = ['wind'],
    $canvas = $('.animation-canvas');

$(document).ready(function() {
    for( var i = 0; i < svgs.length; i++) {
        var svg = svgs[i];

        $.get(path + '?id=' + svg, function(data){
            $canvas.prepend(data);
        });
    }
});
