$(() =>{
  var phone = $(".phoneS").offset().top;
  $(window).scroll(()=>{
    check( phone);
  })
});

var check = function(phone){
  var top = $(window).scrollTop();
  if(phone*0.8 < top){
    $(".phoneS").addClass("sticky");
  }
  else{
    $(".phoneS").removeClass("sticky");
  }
}
