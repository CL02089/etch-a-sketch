'use strict';

const container = document.querySelector('.container');

const cellNumBtn = document.querySelector('.cellnum');
const blackBtn = document.querySelector('.black');
const eraserBtn = document.querySelector('.eraser');
const colorBtn = document.querySelector('.color');
const grayBtn = document.querySelector('.gray');

const makeGrid = function (num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div');
    container.appendChild(row);
    row.className = 'row';

    let height = 600 / num;
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
      c.style.opacity = 1;
    });
  });
};

const eraser = function () {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((c) => {
    c.style.backgroundColor = 'white';
    c.style.opacity = 1;
  });
};

const color = function () {
  const random = function () {
    let number = Math.floor(Math.random() * 256);
    return number;
  };

  const cells = document.querySelectorAll('.cell');

  cells.forEach((c) => {
    let counter = 0;
    c.addEventListener('mouseover', () => {
      let num1 = random();
      let num2 = random();
      let num3 = random();
      c.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
      counter++;
      c.style.opacity = 1;
    });
  });
};

const gray = function () {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((c) => {
    let counter = 0;
    c.addEventListener('mouseover', () => {
      c.style.backgroundColor = '#111111';
      counter++;
      c.style.opacity = 0.1 * counter;
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
colorBtn.addEventListener('click', color);
grayBtn.addEventListener('click', gray);
makeGrid(16);
