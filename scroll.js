$(() =>{
  var NavY = $('.phoneS').offset().top;

  var stickyNav = () =>{
    var Scrolly = $(window).scrollTop();
    if(Scrolly > NavY*0.8){
      $('.phoneS').addClass('sticky');
    }else{
      $('.phoneS').removeClass('sticky');
    }
  };
  stickyNav();
  $(window).scroll(() => {
    stickyNav();
  });
});
