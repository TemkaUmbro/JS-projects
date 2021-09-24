const slidePlagin = (i = 0) => {
    const slides = document.querySelectorAll('.slide');
    const clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
    slides[i].classList.add('active');
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight') {
    clearActiveClasses();
  	++i;
    if (i >= slides.length) {
            i = 0;
        }
  } else if (e.key === 'ArrowLeft') {
  	clearActiveClasses();
  	--i;
    if (i < 0) {
            i = slides.length - 1;
        }
  }
  slides[i].classList.add('active');
});

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        });
    }

setTimeout(function run() {
        clearActiveClasses();
        slides[i++].classList.add('active');
        if (i === slides.length) {
            i = 0;
        }
    setTimeout(run, 3000);
    }, 0);

}

slidePlagin(0);