
function stopVideo() {
     // getting every iframe from the body
     var iframes = document.querySelectorAll('iframe');
     // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
     for (let i = 0; i < iframes.length; i++) {
        if (iframes[i] !== null) {
           var temp = iframes[i].src;
           iframes[i].src = temp;
        }
     }
  };

function nextSlide(){
    stopVideo();
    console.log("nextslide");
    let activeSlide = document.querySelector('.slide.flex');
    activeSlide.classList.add('hidden');
    activeSlide.classList.remove('flex');

    var nextSlide = activeSlide.nextElementSibling;
    if (nextSlide == null) {
        var nextSlide = document.querySelector('.firstslide')
    }
    nextSlide.classList.remove('hidden');
    nextSlide.classList.add('flex');
}

function previousSlide(){
    stopVideo();
    console.log("prevslide");
    let activeSlide = document.querySelector('.slide.flex');
    activeSlide.classList.add('hidden');
    activeSlide.classList.remove('flex');

    var previousSlide = activeSlide.previousElementSibling;
    if (previousSlide == null) {
        var previousSlide = document.querySelector('.lastslide')
    }
    previousSlide.classList.remove('hidden');
    previousSlide.classList.add('flex');
    }


$('.content').click(function (e){
console.log("clicked");
var elm = $(this);
var xPos = e.pageX - elm.offset().left;

if((elm.width() / 2) >= xPos){
  if(elm.tagname == 'A' ){
      pass
  }else{
  previousSlide();
  }
}
 else {
  if(elm.tagname == 'BUTTON' ){
    pass
  }else{
  nextSlide();
}
}
});


