"use strict";

$(document).ready(function(){

  //home section height
  bindWindowSizeEvent(function(){
    var newHeight = $(window).height() - $("nav.navbar").height();
    if(newHeight < 500) newHeight = 500;
    $("#home").height(newHeight);
  });

  //sticky nav
  bindIntereactionEvent(function(){
    if($(window).scrollTop() > $("#home").height()) $("nav.navbar").addClass('navbar-fixed-top');
    else $("nav.navbar").removeClass('navbar-fixed-top');
  });

  //slider
  setInterval(function(){
    $("#home .slides .slide:last-child").fadeOut(function(){
      $(this).prependTo("#home .slides").show();
    });
  }, 8000);

  //scroll spy
  $('body').scrollspy({target: '#main-nav'});

  //fastclick
  FastClick.attach(document.body);
  
});

$(window).load(function(){

});










/////////////////////////////////////////
// Utility Functions
/////////////////////////////////////////

function bindWindowSizeEvent(func)
{
  $(window).on("debouncedresize", func);  
  $(window).on("orientationchange", function(){ setTimeout(func, 150);});
  func();
}

function bindIntereactionEvent(func)
{
  $(window).on("debouncedresize scroll touchstart touchmove touchend", func);
  $(window).on("orientationchange", function(){ setTimeout(func, 150);});
  func();
}