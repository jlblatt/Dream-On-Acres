"use strict";

$(document).ready(function(){

  //home section height
  bindWindowSizeEvent(function(){
    var newHeight = $(window).height() - $("#nav nav").height();
    if(newHeight < 500) newHeight = 500;
    $("#home").height(newHeight);
  });



  //sticky nav
  bindIntereactionEvent(function(){
    
    if($(window).scrollTop() > $("#home").height())
    {
      $("#nav nav").addClass('navbar-fixed-top');
      $("#nav nav .navbar-toggle").addClass("visible");
      $("#nav").css({height: $("#nav nav").height()});
    }
    
    else 
    {
      $("#nav nav").removeClass('navbar-fixed-top');
      $("#nav nav .navbar-toggle").removeClass("visible");
      $("#nav").css({height: 'auto'});
    }
  });



  //slider
  setInterval(function(){
    $("#home .slides .slide:last-child").fadeOut(function(){
      $(this).prependTo("#home .slides").show();
    });
  }, 8000);



  //parallax
  var $parallaxes = $("#home .slide");
  var strength = 100;

  bindIntereactionEvent(function(){

    $parallaxes.each(function(){
    
      var rect = $(this)[0].getBoundingClientRect();
      var winHeight = $(window).height();

      if(rect.bottom < 0) return;

      if(rect.top <= winHeight && rect.bottom > 0)
      {
        var offset = (((rect.bottom / (winHeight + rect.height)) - .5) * strength) + 50;  //hardcoded 50 here because bg image begins position @ 50% offset
        $(this).css({backgroundPosition: "center " + offset + "%"});
      }

    });

  });



  //smooth scroll
  $("#main-nav a, .smooth-scroll").click(function(){
    
    var anchor = $(this).attr("href");
    var dest = $(anchor).offset().top - $("#nav nav").height();
    
    if(dest < 0) dest = 0;

    $('html, body').animate({
      scrollTop: dest
    }, 800);

    return false;

  });



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