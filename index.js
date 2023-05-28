const square = document.querySelectorAll('.square');


square.forEach( (element) => {
    element.addEventListener('click', (event) => {
        const val = prompt("X or O ?");
        if (val === 'X' || val === 'x'){
            element.innerHTML = "X";
        }else if (val === 'O' || val === 'o'){
            element.innerHTML = "O";
        }else {
            alert("Error: Invalid value");
        }
    });
});

const oneSquare = document.getElementById('s1');
const twoSquare = document.getElementById('s2');
const threeSquare = document.getElementById('s3');
const fourSquare = document.getElementById('s4');
const fiveSquare = document.getElementById('s5');
const sixSquare = document.getElementById('s6');
const sevenSquare = document.getElementById('s7');
const eightSquare = document.getElementById('s8');
const nineSquare = document.getElementById('s9');

const squareList = [
    oneSquare, twoSquare, threeSquare,
    fourSquare, fiveSquare, sixSquare,
    sevenSquare, eightSquare, nineSquare
];

squareList.forEach((s) => {
    s.addEventListener('click', (e) => {
        for (var i = 0; i < squareList.length; i++) {
            if ((squareList[i].textContent === "O" && squareList[i+1].textContent === "O" && squareList[i+2].textContent === "O") || 
            (oneSquare.textContent === "O" && fourSquare.textContent === "O" && sevenSquare.textContent === "O") ||
            (twoSquare.textContent === "O" && fiveSquare.textContent === "O" && eightSquare.textContent === "O") ||
            (threeSquare.textContent === "O" && sixSquare.textContent === "O" && nineSquare.textContent === "O") ||
            (oneSquare.textContent === "O" && fiveSquare.textContent === "O" && nineSquare.textContent === "O")  ||
            (threeSquare.textContent === "O" && fiveSquare.textContent === "O" && sevenSquare.textContent === "O")){
                alert("We have a Winner 'O'\n\nRELOAD TO NEW GAME!");
            }else if((squareList[i].textContent === "O" && squareList[i+1].textContent === "O" && squareList[i+2].textContent === "O") || 
            (oneSquare.textContent === "X" && fourSquare.textContent === "X" && sevenSquare.textContent === "X") ||
            (twoSquare.textContent === "X" && fiveSquare.textContent === "X" && eightSquare.textContent === "X") ||
            (threeSquare.textContent === "X" && sixSquare.textContent === "X" && nineSquare.textContent === "X") ||
            (oneSquare.textContent === "X" && fiveSquare.textContent === "X" && nineSquare.textContent === "X")  ||
            (threeSquare.textContent === "X" && fiveSquare.textContent === "X" && sevenSquare.textContent === "X")){
                alert("We have a Winne 'X'\n\nRELOAD TO NEW GAME!");
            }else {
                console.log("No Winner...");
            }
        }
    });
});

