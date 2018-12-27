$(document).ready(function(){

   $('#burger-nav').on('click', function(){
      $('header nav ul').toggleClass('open');
   })

   $('.size label').on('click', function () {
      $('.size label').removeClass('choose')
      $(this).addClass('choose');
   })

   $(".collections ul li").on("mouseover", function () {
      $(".collections ul li").find(".hover1").removeClass('hover');
      $(".collections ul li").find(".hover2").removeClass('frame');
      $(this).find(".hover1").addClass('hover');
      $(this).find(".hover2").addClass('frame');
  })

  $(".collections ul li").mouseout(function () {
   $(".collections ul li").find(".hover1").removeClass('hover');
   $(".collections ul li").find(".hover2").removeClass('frame');
  })


});