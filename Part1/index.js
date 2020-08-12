console.log("Tic Tac Toe")

let morePlay = [];
function play(TicId){
 let  playerSpan = document.getElementById("player");
 let clickedElement = document.getElementById(TicId);
    if(playerSpan.innerText === "X") {
playerSpan.innerText = 'O';
clickedElement.innerText = 'X';
morePlay[TicId] = 'X'
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        morePlay[TicId] = 'O'
    }
    console.log(morePlay)


let topLeft = morePlay[0];
let topMiddle = morePlay[1];
let topRight = morePlay[2];
let middleLeft = morePlay[3];
let middle = morePlay[4];
let middleRight = morePlay[5];
let bottomLeft = morePlay[6];
let bottomMiddle = morePlay[7];
let bottomRight = morePlay[8];

if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
alert('${topLeft} is the winner!');
return
}
if(middleLeft !== undefined && middleLeft === middle &&  middleLeft === middleRight){
alert('${middleLeft} is the winner!')
return
}

}
