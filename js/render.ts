/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
const array = [
  [0, 0, 0, 0, 3, 0],
  [0, 0, 1, 3, 0, 0],
  [3, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 3],
];
let x = 0;
let y = 0;

function render(array: number[][]) {
  let htmlMarkup = '';
  array.forEach((row: number[], indexRow) => {
    htmlMarkup += '<div class="row">';
    row.forEach((item: number, indexColumn: number) => {
      if (item === 0) {
        htmlMarkup += '<div class="item field"></div>';
      } else if (item === 1) {
        x = indexRow;
        y = indexColumn;
        htmlMarkup
          += '<div class="item hero"><img src="img/hero.png" class="img" alt="hero"></div>';
      } else if (item === 2) {
        htmlMarkup
          += '<div class="item tree"><img src="img/tree.png" class="img" alt="tree"></div>';
      } else if (item === 3) {
        htmlMarkup
          += '<div class="item rock"><img src="img/rock.png" class="img" alt="rock"></div>';
      }
    });
    htmlMarkup += '</div>';
  });
  return htmlMarkup;
}
const app: any = document.getElementById('app');
app.innerHTML = render(array);
let stamina = (<any>window).stamina;
stamina = true;
const timeout = () => setTimeout(function () {
  stamina = true;
}, 1000);

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    const countColumns = array[0].length;
    if (y <= countColumns - 1 && array[x][y + 1] === 0 && stamina) {
      array[x][y] = 0;
      array[x][y + 1] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  }
  if (event.key === 'ArrowDown') {
    const countRows = array.length;
    if (x <= countRows - 1 && array[x + 1][y] === 0 && stamina) {
      array[x][y] = 0;
      array[x + 1][y] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  }
  if (event.key === 'ArrowLeft') {
    const countColumns = array.length;
    if (x <= countColumns - 1 && array[x][y - 1] === 0 && stamina) {
      array[x][y] = 0;
      array[x][y - 1] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  }
  if (event.key === 'ArrowUp') {
    const countRows = array.length;
    if (x <= countRows - 1 && array[x - 1][y] === 0 && stamina) {
      array[x][y] = 0;
      array[x - 1][y] = 1;
      app.innerHTML = render(array);
      stamina = false;
      timeout();
    }
  }
});
