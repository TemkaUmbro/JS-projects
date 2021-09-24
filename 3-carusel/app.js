const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSlideIdx = 0

sidebar.style.top = `-${(slidesCount - 1)* 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    const height = container.clientHeight
    if (direction === 'up') {
        activeSlideIdx++
        if (activeSlideIdx === slidesCount) {
            activeSlideIdx = 0;
        }
    } else if (direction === 'down') {
        activeSlideIdx--
        if (activeSlideIdx < 0) {
            activeSlideIdx = slidesCount - 1;
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`
}
