const arr = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    return arr[Math.floor(Math.random()* arr.length)];
}

function playRound(playerSelection, computerSelection){
    let result = undefined;
    switch (playerSelection){
        case 'rock':
            switch (computerSelection){
                case 'paper':
                    result = 'You Lose! Paper beats Rock';
                    break;
                case 'scissors':
                    result = 'You Won! Rock beats Scissors';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection){
                case 'rock':
                    result = 'You Won! Paper beats Rock';
                    break;
                case 'scissors':
                    result = 'You Lose! Scissors beats Paper';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection){
                case 'rock':
                    result = 'You Lose! Rock beats Scissors';
                    break;
                case 'paper':
                    result = 'You Won! Scissors beats Paper';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
    }
    return result;
}


function game(){
    let pwin = winner.filter((item) => item.includes('Won'));
    let cwin = winner.filter((item) => item.includes('Lose'));
    if(count >=5){
        count = 0;
    }
    return `${pwin.length} - ${cwin.length}`;
    
}



let playerSelection;
let count = 0;
let winner = [];
let result;
const buttons = document.querySelectorAll('.btn-input');
const info = document.querySelector('.info');
const displayRes = document.querySelector('.result');
buttons.forEach(button => {
    button.addEventListener('click', () => {
    console.log(button.value);
    playerSelection = button.value;
    result = playRound(playerSelection,getComputerChoice());
    console.log(result);
    info.textContent =result;
    winner.push(result);
    count++;
    finalResult = game();
    displayRes.textContent = finalResult
    });

});
