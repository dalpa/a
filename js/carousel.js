$(document).ready(function(){

  function carousel(index){
     var li = $('.carousel_wrap li').width();
      $('.carousel_wrap ul').animate({marginLeft:-li * index});
  }
  $('.dot').each(function(index){
    $(this).attr('data-index',index);
  }).click(function(){
    var index = $(this).attr('data-index');
    carousel(index);
    $('.dot').removeClass('active');
    $(this).addClass('active');
  });
});
