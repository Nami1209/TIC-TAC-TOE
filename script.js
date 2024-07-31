console.log("Welcome to Tic Tac Toe");
let audioTurn = new Audio("ting.mp3");
let Turn = "X";
let isgameover = false;

// Function to Change the turn
const ChangeTurn = () => {
    return Turn === "X" ? "0" : "X";
};

// Function to Check for a Win
const CheckWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let Wins = [
        [0, 1, 2, -28, 5, 0],
        [3, 4, 5, -28, 15, 0],
        [6, 7, 8, -28, 25, 0],
        [0, 3, 6, -38, 15, 90],
        [1, 4, 7, -28, 15, 90],
        [2, 5, 8, 20, 15, 90],
        [0, 4, 8, -28, 15, 45],
        [2, 4, 6, -28, 15, 135],
    ];

    Wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && 
            (boxtexts[e[0]].innerText !== "")) {

            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "30vw";
            
        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = ChangeTurn();
            audioTurn.play();
            CheckWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    });
});

// Add onclick listener to reset button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element => {
        Element.innerText = "";
    });
    Turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});

