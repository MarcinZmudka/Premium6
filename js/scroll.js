$(() =>{
  var pos = $(".menu").offset().top;
  $(".phoneS").css("margin-top", pos+"px");
  $(".phoneS").css("visibility", "visible");
  var phone = $(".phoneS").offset().top;
  $(window).scroll(()=>{
    check( phone);
  })
});

var check = function(phone){
  var top = $(window).scrollTop();
  var margin = $(window).height();
  if(phone-(margin*0.05) < top){
    $(".phoneS").addClass("sticky");
  }
  else{
    $(".phoneS").removeClass("sticky");
  }
}
