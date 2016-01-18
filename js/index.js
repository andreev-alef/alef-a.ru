function valignment(thisClassName) {
//    var elementParentClass = $('.' + thisClassName).parent().attr('class');
    var elementCount = document.getElementsByClassName(thisClassName).length;
    var elementClassName = '';
    var elementWidth = 0;
    var elementHeight = $('.' + thisClassName).height();
    var space = 50;
    var start = 0;

    for (i = 1; i < elementCount + 1; i++) {
        elementClassName = '.' + thisClassName + ':nth-child(' + i + ')';
        $(elementClassName).css({
            'top': start + i * (elementHeight + space) + 'px'
        });
    }
}
function vcenter(thisClassName) {
    var elementParentClass = $('.' + thisClassName).parent().attr('class');
    var elementCount = document.getElementsByClassName(elementParentClass).length;
    var elementClassName = '';
    for (i = 1; i < elementCount + 1; i++) {
        elementClassName = '.' + elementParentClass + ':nth-child(' + i + ') > .' + thisClassName;
        $(elementClassName).css({
            'top': '50%',
            'margin-top': -$(elementClassName).height() / 2
        });
//        $('.right-block').append('<p>' + elementClassName + '</p>');
    }
}

function hcenter(thisClassName) {
    var elementParentClass = $('.' + thisClassName).parent().attr('class');
    var elementCount = document.getElementsByClassName(elementParentClass).length;
    var elementClassName = '';
    for (i = 1; i < elementCount + 1; i++) {
        elementClassName = '.' + elementParentClass + ':nth-child(' + i + ') > .' + thisClassName;
        $(elementClassName).css({
            'left': '50%',
            'margin-left': -$(elementClassName).width() / 2
        });
//        $('.right-block').append('<p>' + elementClassName + '</p>');
    }
}

function rootCenter() {
    var elementClassName = '.root';
    var w = $(elementClassName).width();
    var h = $(elementClassName).height();
    if (parseInt($(elementClassName).css('top')) < (h / 2)) {
        $(elementClassName).css({
            'top': '0px'
        });
    } else {
        $(elementClassName).css({
            'left': '50%',
            'margin-left': -w / 2,
            'top': '50%',
            'margin-top': -h / 2
        });

    }
}


function adaptive() {
    if ($(window).width() >= 1600) {

        $('.title').html(function () {
            $('.root').css({
                'height': $(window).height() + 'px',
                'position': 'absolute'
//                'overflow': 'hidden'
            });
            $('.wrapper-content').css({
                'height': ($(window).height() - $('.header').height()) + 'px'
            });
        });
    }

}

$(document).ready(function () {

//    var content = $('#about').html();

    $('.more, .navigator-item').click(function () {
        $('.wrapper-content').fadeIn('slow');
    });
    $('.btn-hide').click(function () {
        $('.wrapper-content').fadeToggle('slow');
    });
});