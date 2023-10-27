'use strict';

const container = document.querySelector('.container');

const cellNumBtn = document.querySelector('.cellnum');
const blackBtn = document.querySelector('.black');
const eraserBtn = document.querySelector('.eraser');

const makeGrid = function (num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div');
    container.appendChild(row);
    row.className = 'row';

    let height = 500 / num;
    row.style.height = `${height}px`;

    for (let i = 0; i < num; i++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);
      cell.style.width = '100%';
    }
  }

  paint();
};

const paint = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((c) => {
    c.addEventListener('mouseover', () => {
      c.style.backgroundColor = 'black';
    });
  });
};

const eraser = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((c) => {
    c.addEventListener('mouseover', () => {
      c.style.backgroundColor = 'white';
    });
  });
};

cellNumBtn.addEventListener('click', () => {
  let cellNum = Number(prompt('number of squares per side'));
  if (cellNum > 100) alert('The max number of squares is 100!');
  if (cellNum <= 100) {
    container.innerHTML = '';
    makeGrid(cellNum);
    paint();
  }
});

eraserBtn.addEventListener('click', eraser);
blackBtn.addEventListener('click', paint);
makeGrid(16);
