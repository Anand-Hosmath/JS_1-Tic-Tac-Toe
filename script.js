let boxes = document.querySelectorAll('.box');
let restart = document.querySelector('.restart-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [2,5,8],
    [1,4,7],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turnO) {
        // Player O
        box.innerText = "O";
        box.style.color = "#DF2935";
        turnO = false;
        
    } else {
        // Player X
        box.innerText = "X";
        turnO = true;
    }    
    box.disabled = true;

    checkWinner();    
    });
});

const disableBoxes = () => {
    for( let box of boxes) {
        box.disabled = true ;
    }
}

const enableBoxes = () => {
    for( let box of boxes) {
        box.disabled = false ;
        box.innerText = '';
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner Is ${Winner}`; 
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// const noWinner = (noWinner) => {
//     msg.innerText = `No Winner, GO AGAIN `; 
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }

const checkWinner = () => {
    for(let pattern of winpattern) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if( pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if( pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log('Winner', pos1Value);
                showWinner(pos1Value);
            }
        }
    }
};

newGameBtn.addEventListener('click',resetGame);
restart.addEventListener('click',resetGame);

