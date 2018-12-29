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


  $('.subscribe').on('mouseenter', function () {
     $(this).find('.hover1').addClass('hover');
  })

  $('.subscribe').mouseleave(function () {
     $(this).find('.hover1').removeClass('hover');
  })

  /*banner slider*/

  let $bannertext = $('.bannertext ul li');
  let $bannerdots = $('.bannerdot');
  let index = -1;
  
  showText();

  function showText() {
     index++;
     if(index > $bannertext.length - 1){
        index = 0;
     }
     $($bannertext).css({'display': 'none'});
     $($bannertext[index]).css({'display': 'inline-block'});
     $($bannerdots).removeClass('banneractive');
     $($bannerdots[index]).addClass('banneractive');

     setTimeout(showText,5000)
  }

  $($bannerdots).on('click', function(){
   index = $(this).index()
   changeText(index); 
 })

 function changeText (n) {
   $($bannertext).css({'display': 'none'});
   $($bannertext[n]).css({'display': 'inline-block'});
   $($bannerdots).removeClass('banneractive');
   $($bannerdots[n]).addClass('banneractive');
 }

/*trending items slider */

  let $items = $('.trendingitems ul li');
  let $dots = $('.dot');
  let n = 0;
  
  showItem(n);

  function showItem(n) {
     
     $($items).css({'display': 'none'});
     $($items[n]).css({'display': 'inline-block'});
     $($dots).removeClass('active');
     $($dots[n]).addClass('active');

  }

  $($dots).on('click', function(){
   n = $(this).index()
   showItem(n); 
 })


})