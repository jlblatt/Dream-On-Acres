"use strict";

$(document).ready(function(){

  //home section height
  bindWindowSizeEvent(function(){
    var newHeight = $(window).height() - $("#nav nav").height();
    if(newHeight < 500) newHeight = 500;
    $("#home").height(newHeight);
  });



  //services panel height
  bindWindowSizeEvent(function(){
    var tallest = 0;

    $("#services-pricing .panel").each(function(){
      $(this).css({height: 'auto'});
      if($(this).height() > tallest) tallest = $(this).height();
    });

    if($(window).width() >= 640) $("#services-pricing .panel").css({height: tallest});
  });


  //sticky nav
  bindIntereactionEvent(function(){
    
    if($(window).scrollTop() > $("#home").height() - 5)
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



  //close nav on click
  $('#nav nav a').on('click', function(){
    if($("#nav nav .navbar-collapse").attr('aria-expanded') == 'true') $(".navbar-toggle").click();
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
    var dest = $(anchor).offset().top;
    var curr = $('html').scrollTop();
    var diff = Math.abs(curr - dest);
    var time = (diff / $('html').height()) * 1800;
    if(time < 300) time = 300;
    console.log(time);
    
    if(dest < 0) dest = 0;

    $('html, body').animate({
      scrollTop: dest
    }, time);

    return false;

  });



  //photoswipe
  var pswpElement = document.querySelectorAll('.pswp')[0];

  var items = [];
  $("#gallery .item a").each(function(){

    items.push({
      src: $(this).attr('href'),
      msrc: $(this).attr('href').replace("gallery", "gallery/thumbs"),
      w: 1920,
      h: 1440
    });
  });
      
  var options = {
    bgOpacity: .95,
    history: false,
    preload: [1,3],
    index: 0    
  };

  $("#gallery .item a").click(function(){
    options.index = $(this).parent().index();
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
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