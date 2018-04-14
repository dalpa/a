$(document).ready(function(){
   $('.gbtn').hover(
      function(){
         $('#gnb_sub').stop().slideDown(400);
      },
      function(){
         $('#gnb_sub').stop().slideUp(600);
      }
   );
   $('#gnb_sub').hover(
      function(){
         $('#gnb_sub').stop().slideDown(400);
      },
      function(){
         $('#gnb_sub').stop().slideUp(600);
      }
   );
   /*Footer nav*/
   $('footer #dropdown .button').each(function(){
      $(this).click(function(e){
         e.stopPropagation();
         $(this).siblings('ul').slideDown(400);
      });
      $('html').click(function(){
         $(this).stop().find('footer #dropdown ul').hide(600);
      });
   });
 /* nav lnb*/
   $('nav .dropdown').each(function () {
        $(this).on("click",function(e){
              e.stopPropagation();
              $(this).children('ul').show(300);
        });
        $(this).mouseleave(function(e){
           e.stopPropagation();
           $(this).children('ul').hide();
        });
    });

/* scroll top
-------------------------*/
   $('.aside ul a:last-child').click(function(){
      $("html,body").animate({
         scrollTop: 0
      },'slow');
   });

});
