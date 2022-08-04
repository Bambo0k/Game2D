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

function render(array) {
    htmlMarkup = "";
    array.forEach((row, indexRow) => {
        htmlMarkup = htmlMarkup + '<div class="row">';
        row.forEach((item, indexColumn) => {
            if (item === 0) {
                htmlMarkup = htmlMarkup + '<div class="item field"></div>';
            } else if (item === 1) {
                x = indexRow;
                y = indexColumn;
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
const app = document.getElementById("app");
app.innerHTML = render(array);
let stamina = true;

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        const countColumns = array[0].length;
        if (y < countColumns - 1 && array[x][y + 1] == 0 && stamina) {
            array[x][y] = 0;
            array[x][y + 1] = 1;
            app.innerHTML = render(array);
            stamina = false;
            setTimeout(() => {
                stamina = true;
            }, 1000);
        }
    }
    if (event.key === "ArrowDown") {
        const countRows = array.length;
        if (x < countRows - 1 && array[x + 1][y] == 0 && stamina) {
            array[x][y] = 0;
            array[x + 1][y] = 1;
            app.innerHTML = render(array);
            stamina = false;
            setTimeout(() => {
                stamina = true;
            }, 1000);
        }
    }
    if (event.key === "ArrowLeft") {
        const countColumns = array.length;
        if (x < countColumns - 1 && array[x][y - 1] == 0 && stamina) {
            array[x][y] = 0;
            array[x][y - 1] = 1;
            app.innerHTML = render(array);
            stamina = false;
            setTimeout(() => {
                stamina = true;
            }, 1000);
        }
    }
    if (event.key === "ArrowUp") {
        const countRows = array.length;
        if (x < countRows - 1 && array[x - 1][y] == 0 && stamina) {
            array[x][y] = 0;
            array[x - 1][y] = 1;
            app.innerHTML = render(array);
            stamina = false;
            setTimeout(() => {
                stamina = true;
            }, 1000);
        }
    }
});