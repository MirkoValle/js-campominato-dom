const btn = document.querySelector("button");
const gridEl = document.getElementById("grid");
const bombsN = 16;
const score = document.querySelector("h2");
const esito = document.querySelector("h2.esito");

btn.addEventListener("click", function () {
    gridEl.innerHTML = ""
    score.innerHTML = ""
    esito.innerHTML = ""

    let points = 0;

    gridGenerator(points, bombsN, score, esito);


});

function gridGenerator(points, bombsN, score, esito) {

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
            cellEl.append(index + 1);
        }
        cellEl.classList.add("cell", mode);


        cellEl.addEventListener("click", function () {


            if (cellEl.classList.contains("clicked") == false) {
                cellEl.classList.add("active")
                cellEl.classList.add("clicked")
                if (cellEl.classList.contains("bomb")) {
                    stop(score, points)
                    esito.innerHTML = "Hai perso, ritenta sarai più fortunato"
                }

                points += 1;
                console.log(points)

                let allCell = document.getElementsByClassName("cell")
                if (points === allCell.length - bombsN) {
                    stop(score, points)
                    esito.innerHTML = "Congratulazioni hai vinto!!"
                }
            }
        });

        gridEl.appendChild(cellEl);
    }
}



function stop(score, points) {
    let allCell = document.getElementsByClassName("cell")

    for (let index = 0; index < allCell.length; index++) {
        allCell[index].classList.add("clicked");
    }
    score.innerHTML = "Punteggio finale: " + points

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