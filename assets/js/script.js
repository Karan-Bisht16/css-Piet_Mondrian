const body = document.querySelector('body');
const leftArrow = document.querySelector('.carousel-control-prev-icon');
const rightArrow = document.querySelector('.carousel-control-next-icon');
body.addEventListener('keydown', function(event){
    if (event.key==='ArrowRight'){
        rightArrow.click();
    } else if (event.key==='ArrowLeft'){
        leftArrow.click();
    }
});

function scrollWin() {
    window.scrollTo({
        top: 200,
        behavior: 'smooth',
      });
  }
window.onload=scrollWin;