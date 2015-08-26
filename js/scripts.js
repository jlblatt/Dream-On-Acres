"use strict";

$(document).ready(function(){

  bindWindowSizeEvent(function(){
    var newHeight = $(window).height() - $(".main-nav").height();
    if(newHeight < 500) newHeight = 500;
    $(".hero").height(newHeight);
  });

  bindIntereactionEvent(function(){
    if($(window).scrollTop() > $(".hero").height()) $(".main-nav").addClass('navbar-fixed-top');
    else $(".main-nav").removeClass('navbar-fixed-top');
  });

  setInterval(function(){
    $(".hero .slides .slide:last-child").fadeOut(function(){
      $(this).prependTo(".hero .slides").show();
    });
  }, 8000);

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