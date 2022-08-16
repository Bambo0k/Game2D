/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const arrowRight = document.querySelector('.arrowRight');
const arrowDown = document.querySelector('.arrowDown');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowUp = document.querySelector('.arrowUp');
if (arrowRight){
  arrowRight.addEventListener('click', () => {
    const countColumns = (<any>window).array[0].length;
    if ((<any>window).y < countColumns - 1 && (<any>window).array[(<any>window).x][(<any>window).y + 1] === 0 && (<any>window).stamina) {
      (<any>window).array[(<any>window).x][(<any>window).y] = 0;
      (<any>window).array[(<any>window).x][(<any>window).y + 1] = 1;
      (<any>window).app.innerHTML = (<any>window).render((<any>window).array);
      (<any>window).stamina = false;
      setTimeout(() => {
        (<any>window).stamina = true;
      }, 1000);
    }
  });
}
if(arrowDown) {
  arrowDown.addEventListener('click', () => {
    const countRows = (<any>window).array.length;
    if ((<any>window).x < countRows - 1 && (<any>window).array[(<any>window).x + 1][(<any>window).y] === 0 && (<any>window).stamina) {
      (<any>window).array[(<any>window).x][(<any>window).y] = 0;
      (<any>window).array[(<any>window).x + 1][(<any>window).y] = 1;
      (<any>window).app.innerHTML = (<any>window).render((<any>window).array);
      (<any>window).stamina = false;
      setTimeout(() => {
        (<any>window).stamina = true;
      }, 1000);
    }
  });
}
if(arrowLeft){
arrowLeft.addEventListener('click', () => {
  const countColumns = (<any>window).array.length;
  if ((<any>window).x < countColumns - 1 && (<any>window).array[(<any>window).x][(<any>window).y - 1] === 0 && (<any>window).stamina) {
    (<any>window).array[(<any>window).x][(<any>window).y] = 0;
    (<any>window).array[(<any>window).x][(<any>window).y - 1] = 1;
    (<any>window).app.innerHTML = (<any>window).render((<any>window).array);
    (<any>window).stamina = false;
    setTimeout(() => {
      (<any>window).stamina = true;
    }, 1000);
  }
});}
if (arrowUp) {
  arrowUp.addEventListener('click', () => {
  const countRows = (<any>window).array.length;
  if ((<any>window).x < countRows - 1 && (<any>window).array[(<any>window).x - 1][(<any>window).y] === 0 && (<any>window).stamina) {
    (<any>window).array[(<any>window).x][(<any>window).y] = 0;
    (<any>window).array[(<any>window).x - 1][(<any>window).y] = 1;
    (<any>window).app.innerHTML = (<any>window).render((<any>window).array);
    (<any>window).stamina = false;
    setTimeout(() => {
      (<any>window).stamina = true;
    }, 1000);
  }
})};
