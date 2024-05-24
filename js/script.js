const esito = document.querySelector("h2.esito");
const gridEl = document.getElementById("grid");
const btn = document.querySelector("button");
const score = document.querySelector("h2");
const bombsN = 16;

// Al click del bottone Play
btn.addEventListener("click", function () {
    //! Pulisco...
    //La griglia
    gridEl.innerHTML = "";

    //I punti
    score.innerHTML = "";

    //L'esito di vittoria o sconfitta
    esito.innerHTML = "";

    let points = 0;
    //Funzione di generazione griglia
    gridGenerator(points, bombsN, score, esito);

    //Aggiunga la classe active alla griglia
    gridEl.classList.add("active");
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

    //Creo le singole celle
    for (let index = 0; index < cellN; index++) {
        const cellEl = document.createElement("article");

        //Se la posizione della cella corrisponde alla posizione dell'array di una bomba la inserisco
        if (arrayBombs.includes(index)) {
            cellEl.classList.add("bomb");
            let bombImg = document.createElement("span");
            cellEl.appendChild(bombImg);
        }

        //Inserisco le classi generali delle celle in base alla modalità di gioco
        cellEl.classList.add("cell", mode);

        //Aggiungi la cella nella griglia
        gridEl.appendChild(cellEl);

        //Al click di una cella
        cellEl.addEventListener("click", function () {

            //Se la cella non è mai stata clicckata
            if (cellEl.classList.contains("clicked") == false) {

                //aggiungi le seguenti classi e rendila non clicckabile
                cellEl.classList.add("active");
                cellEl.classList.add("clicked");

                //se è una bomba
                if (cellEl.classList.contains("bomb")) {

                    //Ferma il gioco e mostra esito di sconfitta
                    stop(score, points);
                    esito.innerHTML = "Hai perso, ritenta sarai più fortunato";

                    //Prendiamo la lista di tutte le celle
                    let allCell = document.getElementsByClassName("cell");
                    //Per ogni cella contenuta nell'array delle bombe aggiungi la classe attiva per mostare tutte le bombe
                    for (let i = 0; i < arrayBombs.length; i++) {
                        allCell[arrayBombs[i]].classList.add("active")
                    }
                }

                //Aggiungi un punto
                points += 1;

                //Prendiamo la lista di tutte le celle
                let allCell = document.getElementsByClassName("cell");

                //Se i punti corrispondo a (totale celle - totale bombe)
                if (points === allCell.length - bombsN) {

                    //Ferma il gioco e mostra esito di vittoria
                    stop(score, points);
                    esito.innerHTML = "Congratulazioni hai vinto!!";
                }
            }
        });
    }
}

//Funzione per fermare il gioco e mostrare il punteggio
function stop(score, points) {
    //Prendiamo la lista di tutte le celle
    let allCell = document.getElementsByClassName("cell");

    //Aggiungiamo la classe a tutte le celle
    for (let index = 0; index < allCell.length; index++) {
        allCell[index].classList.add("clicked");
    }

    //Mostriamo il punteggio
    score.innerHTML = "Punteggio finale: " + points;
}

//Funzione per creare un numero casuale in base alla grandezza della griglia
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

//Funzione per generare l'array con la relativa posizione di ogni bomba
function bombsGenerator(cellN, bombsN) {
    //Array vuoto che conterrà la posizione delle bombe
    let array = [];

    //Crea 16 bombe in una posizione casuale senza ripetere mai lo stesso numero
    for (let index = 0; index < bombsN; index++) {
        let bomb = getRandomNumber(0, cellN - 1);
        while (array.includes(bomb)) {
            bomb = getRandomNumber(0, cellN - 1);
        }

        //Inseriscilo nell'array
        array.push(bomb);
    }
    return array;
}