var scrolltop = $('.back-top');
scrolltop.click(function(){
  $('html, body').animate({scrollTop:0}, 500);
  return false;
});
