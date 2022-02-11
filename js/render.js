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
const field = 0;
const hero = 1;
const tree = 2;
const rock = 3;
function render(array) {
  htmlMarkup = "";
  array.forEach((row) => {
    htmlMarkup = htmlMarkup + '<div class="row">';
    row.forEach((item) => {
      if (item === 0) {
        htmlMarkup = htmlMarkup + '<div class="item field"></div>';
      } else if (item === 1) {
        htmlMarkup =
          htmlMarkup +
          '<div class="item hero"><img src="img/hero.png" class="img" alt="hero"></div>';
      } else if (item === 2) {
        htmlMarkup =
          htmlMarkup +
          '<div class="item tree"><img src="img/tree.png" class="img" alt="tree"></div>';
      } else if (item === 3) {
        htmlMarkup =
          htmlMarkup +
          '<div class="item rock"><img src="img/rock.png" class="img" alt="rock"></div>';
      }
    });
    htmlMarkup = htmlMarkup + "</div>";
  });
  return htmlMarkup;
}
document.getElementById("app").innerHTML = render(array);
