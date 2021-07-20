$(document).ready(function () {
    $('.close-bar').click(function () {
        $(".header-top").addClass('close_header')
    });
});

// add thêm class.container với class .row bên trong ul
$(document).ready(function () {
    $(".hazo-mega-menu >ul").wrapInner('<div class = "row"></div>')
    $(".hazo-mega-menu >ul").wrapInner('<div class = "container"></div>')
})

$(document).ready(function () {
    $('footer-infomation__product .icon-slideToggle').click(function () {
        $('.icon-slideToggle').next('footer-infomation__product ul').slideToggle();
    });
});

// mmenu-mobile
$(document).ready(function () {
    $('#menu-mobile').mmenu();
});