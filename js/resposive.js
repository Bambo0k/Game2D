/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
document.querySelector('.arrowRight').addEventListener('click', () => {
  const countColumns = array[0].length;
  if (y < countColumns - 1 && array[x][y + 1] === 0 && stamina) {
    array[x][y] = 0;
    array[x][y + 1] = 1;
    app.innerHTML = render(array);
    stamina = false;
    setTimeout(() => {
      stamina = true;
    }, 1000);
  }
});
document.querySelector('.arrowDown').addEventListener('click', () => {
  const countRows = array.length;
  if (x < countRows - 1 && array[x + 1][y] === 0 && stamina) {
    array[x][y] = 0;
    array[x + 1][y] = 1;
    app.innerHTML = render(array);
    stamina = false;
    setTimeout(() => {
      stamina = true;
    }, 1000);
  }
});
document.querySelector('.arrowLeft').addEventListener('click', () => {
  const countColumns = array.length;
  if (x < countColumns - 1 && array[x][y - 1] === 0 && stamina) {
    array[x][y] = 0;
    array[x][y - 1] = 1;
    app.innerHTML = render(array);
    stamina = false;
    setTimeout(() => {
      stamina = true;
    }, 1000);
  }
});
document.querySelector('.arrowUp').addEventListener('click', () => {
  const countRows = array.length;
  if (x < countRows - 1 && array[x - 1][y] === 0 && stamina) {
    array[x][y] = 0;
    array[x - 1][y] = 1;
    app.innerHTML = render(array);
    stamina = false;
    setTimeout(() => {
      stamina = true;
    }, 1000);
  }
});
