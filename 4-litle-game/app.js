const board = document.querySelector('#board');
const SQUARES_NUMBER = 6000;
const colors = [
    '#FF00FF',
    '#663399',
    '#FF6347',
    '#FF1493',
    '#00CED1',
    '#CD5C5C',
    '#9400D3',
    '#F4A460',
    '#7B68EE',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(el) {
    const randomColor = getRandomColor();
    el.style.backgroundColor = randomColor;
    el.style.boxShadow = `0 0 5px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}