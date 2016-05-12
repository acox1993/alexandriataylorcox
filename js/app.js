var main = function () {
    $('.icon-menu').click(function(){
        $('.menu').animate({
            left:'0em'}, 200);
        // $('body').animate({
        //     left:"18em"}, 200);
    });

    $('.icon-close').click(function(){
        $('.menu').animate({
            left:"-18em"}, 200);
        // $('body').animate({
        //     left: '0em'}, 200);
    });
};

$(document).ready(main);

$(document).ready(function(){

});