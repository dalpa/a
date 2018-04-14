$(document).ready(function(){
    $('.dropdown').each(function () {
      $(this).on("click",function(e){
            e.stopPropagation();
            $(this).children('ul').show(300);
      });
      $(this).mouseleave(function(e){
         e.stopPropagation();
         $(this).children('ul').hide();
      });
   });
   $('.footer_area2 #dropdown').each(function(){
      $(this).children('ul').toggle(400);
      $('html').click(function(e){
         e.stopPropagation();
         $(this).find('#dropdown ul').hide(200);
      });
   });
});
