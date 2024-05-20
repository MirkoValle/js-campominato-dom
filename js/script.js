const btn = document.querySelector("button");
const gridEl = document.getElementById("grid");
const bombsN = 16;

btn.addEventListener("click", function () {
    gridEl.innerHTML = ""

    let points = 0;

    gridGenerator(points);


});


function gridGenerator(points) {

    // Cambio il numero di celle in base alla modalità scelta
    let cellN;
    let modeEl = document.getElementById("mode");
    let mode = modeEl.value;

    if (mode === "easy") {
        cellN = 100;
    } else if (mode === "medium") {
        cellN = 81;
    } else {
        cellN = 49;
    }
    // Genero l'array con l'indice delle bombe
    let arrayBombs = bombsGenerator(cellN, bombsN);


    for (let index = 0; index < cellN; index++) {
        const cellEl = document.createElement("article");

        if (arrayBombs.includes(index)) {
            cellEl.classList.add("bomb")
            let bombImg = document.createElement("span");
            cellEl.appendChild(bombImg);
        }
        cellEl.classList.add("cell", mode);

        cellEl.addEventListener("click", function () {

            if (cellEl.classList.contains("clicked") == false) {
                cellEl.classList.add("active")
                cellEl.classList.add("clicked")
            }

            if (cellEl.classList.contains("bomb")) {
                stop()
            }


        });

        gridEl.appendChild(cellEl);
    }
}

function stop() {
    let allCell = document.getElementsByClassName("cell")

    for (let index = 0; index < allCell.length; index++) {
        allCell[index].classList.add("clicked");
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function bombsGenerator(cellN, bombsN) {
    let array = [];

    for (let index = 0; index < bombsN; index++) {
        let bomb = getRandomNumber(1, cellN);
        while (array.includes(bomb)) {
            bomb = getRandomNumber(1, cellN);
        }
        array.push(bomb);
    }
    return array;
}