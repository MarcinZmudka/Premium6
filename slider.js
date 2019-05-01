$(()=>{
  const slide = document.querySelector('.sliderContainer');
  const images = document.querySelectorAll('.sliderContainer img');

  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  const size = images[0].clientWidth;
  var counter = 1;
  slide.style.transform = 'translateX('+(-size*counter)+'px)';
  checkPage(counter);

  nextBtn.addEventListener('click', ()=>{
    if (counter >= images.length-1) {
      return;
    }
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX('+(-size*counter)+'px)';
    checkPage(counter);
  });
  prevBtn.addEventListener('click', ()=>{
    if (counter <=0) {
      return;
    }
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX('+(-size*counter)+'px)';
    checkPage(counter);
  });
  slide.addEventListener('transitionend', ()=>{
    if(images[counter].id === "lastClone"){
      slide.style.transition = "none";
      counter = images.length-2;
      slide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(images[counter].id === "firstClone"){
      slide.style.transition = "none";
      counter = images.length-counter;
      slide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
  });
});

function checkPage(counter){
  var index = counter;
  if(index == 5){
    index =1;
  }
  else if (index == 0) {
    index =4;
  }
  for(var i=1; i<5; i++){
    $("#"+i).removeClass("optionS");
    $("#"+i).addClass("option");
  }
  $("#"+index).addClass("optionS");
  $("#"+index).removeClass("option");
  console.log(counter);
}
