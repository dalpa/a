$(document).ready(function(){
  $('#tabs ul li').click(function(){
      var tabNum = $(this).attr('data-tab');
      $('#tabs ul li').removeClass('current');
      $('.tab').removeClass('current');

      $(this).addClass('current');
      $('#' + tabNum).addClass('current');
      $(this).find('span').css({"display":"block"});
  });
});
