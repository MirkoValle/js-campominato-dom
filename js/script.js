const btn = document.querySelector("button");
const gridEl = document.getElementById("grid");

btn.addEventListener("click", function () {
    let modeEl = document.getElementById("mode");
    let mode = modeEl.value;
    let cellN;

    if (mode === "easy") {
        cellN = 49;
    } else if (mode === "medium") {
        cellN = 81;
    } else {
        cellN = 100;
    }

    gridEl.innerHTML = ""
    for (let index = 0; index < cellN; index++) {
        const cellEl = document.createElement("article");
        cellEl.classList.add("cell", mode);
        cellEl.append(index + 1);
        cellEl.addEventListener("click", function () {
            cellEl.classList.toggle("active")
            console.log(index + 1)
        });

        gridEl.appendChild(cellEl);
    }
})