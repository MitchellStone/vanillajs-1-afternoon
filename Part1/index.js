console.log("Tic Tac Toe")

let morePlay = ('')
function play(TicId){
 let  playerSpan = document.getElementById("player");
 let clickedElement = document.getElementById(TicId);
    if(playerSpan.innerText === "X") {
playerSpan.innerText = 'O';
clickedElement.innerText = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
    }
    
}