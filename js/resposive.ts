/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const arrowRight = document.querySelector('.arrowRight');
const arrowDown = document.querySelector('.arrowDown');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowUp = document.querySelector('.arrowUp');

function subscribe(y: any, x: any, array: any, stamina: any, render: any, app: any, timeout: any) {
if (arrowRight){
  arrowRight.addEventListener('click', () => {
    const countColumns = array[0].length;
    if (y <= countColumns - 1 && array[x][y + 1] === 0 && stamina) {
      array[x][y] = 0;
      array[x][y + 1] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  });
}
if(arrowDown) {
  arrowDown.addEventListener('click', () => {
    const countRows = array.length;
    if (x <= countRows - 1 && array[x + 1][y] === 0 && stamina) {
      array[x][y] = 0;
      array[x + 1][y] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  });
}
if(arrowLeft){
arrowLeft.addEventListener('click', () => {
  const countColumns = array.length;
  if (x <= countColumns - 1 && array[x][y - 1] === 0 && stamina) {
    array[x][y] = 0;
    array[x][y - 1] = 1;
    app.innerHTML = render(array);
    stamina = false;
    timeout();
  }
});}
if (arrowUp) {
  arrowUp.addEventListener('click', () => {
  const countRows = array.length;
  if (x <= countRows - 1 && array[x - 1][y] === 0 && stamina) {
    array[x][y] = 0;
    array[x - 1][y] = 1;
    app.innerHTML = render(array);
    stamina = false;
    timeout();
  }
})};
}

subscribe((<any>window).y, (<any>window).x, (<any>window).array, (<any>window).stamina, (<any>window).render, (<any>window).app, (<any>window).timeout);