"use strict";

$(document).ready(function(){

  bindWindowSizeEvent(function(){
    $("#hero").height($(window).height() - $("#main-nav").height());
  });

  bindIntereactionEvent(function(){
    if($(window).scrollTop() > $("#hero").height()) $("#main-nav").addClass('navbar-fixed-top');
    else $("#main-nav").removeClass('navbar-fixed-top');
  });

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