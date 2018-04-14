/* JQuery SLIDER
-------------------------------------*/
   var dot =$('.control_button');
   var canvas = $('.slide');
   var slide_width = $('.slide img').width();
   var slide_count = $('.slider_image').length;
   var slideUiWidth = slide_width * slide_count;

   $('.control_button').each(function(){
      $('.control_button').attr('data-index','index');
   }).click(function(){
      var indx = $('.control_button').attr('data-index','index');
      next(indx);
   });

   //AUTO
   canvas.css({width:slideUiWidth});
   function do_slide(){
      interval = setInterval(function(){
         next();
      },5000);
   };
   do_slide();
   $('.slide').hover(function(){
      clearInterval(interval);
   });
   $('.slide').mouseleave(function() {
      do_slide();
   });

   //PREV, NEXT BUTTON
   function prev(){
     $('.slide').animate({Left:+slide_width}, function(){
       $('.slide img:last-child').prependTo('.slide');
       $('.slide').css('left','');
       $('.control_button:first-child').appendTo('.slider_control_panel');
      });
   }
   function next(){
     $('.slide').animate({Left:-slide_width}, function(){
       $('.slide img:first-child').appendTo('.slide');
       $('.slide').css('left','')
       $('.control_button:last-child').prependTo('.slider_control_panel');
      });
   }

   $('.control_prev').click(function(){
     prev();
   });
   $('.control_next').click(function(){
     next();
   });

   //NEW_ITEM_BANNER_SLIDER
   var eventWidth = $('.new_banner_canvas img').width();
   var eventln = $('.new_banner_canvas img').length;
   var eventUi = eventWidth * eventln;
   $('.new_banner_canvas').css({ width:eventUi});
   $('.new_banner_dot').each(function(){
      $('.new_banner_dot').attr('data-index','index');
   }).click(function(){
      eventNext();
   });
   function bannerSlide(){
      interval = setInterval(function (){
         eventNext();
      },2000);
   }
   bannerSlide();
   $('.new_banner_canvas').hover(function(){
      clearInterval(interval);
   });
   $('.new_banner_canvas').mouseleave(function(){
      bannerSlide();
   });
   function eventNext(){
      $('.new_banner_canvas').animate({left:-eventWidth});
      $('.new_banner_canvas img:first-child').appendTo('.new_banner_canvas');
      $('.new_banner_dot a:last-child').prependTo('.new_banner_dot');
   };

   //BANNER SLIDER3
   $('.btn_wrap a').each(function(){
      $('.btn_wrap a').attr('data-index','index');
   }).click(function (){
      bnNext();
   });

   var evWidth = $('.banner_canvas img').width();
   var evLn =$('.banner_canvas img').length;
   var eventUi = evWidth * evLn;
   $('.banner_canvas').css({width:eventUi});
   function bnNext(){
      $('.banner_canvas').animate({ left: evWidth});
      $('.banner_canvas img:last-child').prependTo('.banner_canvas');
      $('.btn_wrap a:last-child').prependTo('.btn_wrap');
   }
