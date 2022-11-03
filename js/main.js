$(document).ready(function(){
    $('.main_slider').slick({
        arrows:true,
        dots:true
    });

    $('.reviews_slider').slick({
        arrows:true,
    });

    $('.cases_slider').slick({
        arrows:true,
    });

    $('.menu_btn').click(function(){
        $('.header_navbar1').toggleClass("active");
    })
  });