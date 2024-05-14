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
            square.classList.add("hovered");
        }); 
    });
}

sizeButton.addEventListener('click', function(e) {
    let rawNumberOfSquares = numberOfSquaresInput.value;
    let numberOfSquares = rawNumberOfSquares ** 2
    updateGridSize(numberOfSquares, rawNumberOfSquares);
})

// numberOfSquaresInput.addEventListener("input", () => {
//     let numberOfSquares = numberOfSquaresInput.value;
//     alert(numberOfSquares);
// });


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
        square.classList.add("hovered");
    }); 
});
