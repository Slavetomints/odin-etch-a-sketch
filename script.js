const etchASketchContainer = document.querySelector('#container');
const numberOfSquaresInput = document.querySelector("#number-of-squares");
const sizeButton = document.querySelector('#size-button');

function updateGridSize(numberOfSquares, rawNumberOfSquares) {
    let existingGridSquares = etchASketchContainer.querySelectorAll('.grid-square');
    existingGridSquares.forEach(square => {
        etchASketchContainer.removeChild(square);
    });

    for (i = 0; i < numberOfSquares; ++i) {
        let etchASketchGridSquare = document.createElement("div");
        etchASketchGridSquare.classList.add("grid-square");
        etchASketchContainer.appendChild(etchASketchGridSquare);
        let squareWidth = (400 / rawNumberOfSquares) + "px";
        etchASketchGridSquare.style.width = squareWidth;
        etchASketchGridSquare.style.height = squareWidth;
    };
    let etchASketchGridSquares = document.querySelectorAll(".grid-square");

    etchASketchGridSquares.forEach(square => {
        square.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColor = "#" + randomColor.padStart(6, '0');
            square.style.backgroundColor = randomColor;
        }); 
    });
    
}

sizeButton.addEventListener('click', function(e) {
    let rawNumberOfSquares = numberOfSquaresInput.value;
    let numberOfSquares = rawNumberOfSquares ** 2
    updateGridSize(numberOfSquares, rawNumberOfSquares);
})

for (i = 0; i < 144; ++i) {
    let etchASketchGridSquare = document.createElement("div");
    etchASketchGridSquare.classList.add("grid-square");
    etchASketchContainer.appendChild(etchASketchGridSquare);
    let squareWidth = (400 / 12) + "px";
    etchASketchGridSquare.style.width = squareWidth;
    etchASketchGridSquare.style.height = squareWidth;
};

let etchASketchGridSquares = document.querySelectorAll(".grid-square");

etchASketchGridSquares.forEach(square => {
    square.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + randomColor.padStart(6, '0');
        square.style.backgroundColor = randomColor;
    }); 
});
