let player1Score = 0;
let player2Score = 0;

document.getElementById('rollButton').addEventListener('click', function() {
    let player1 = document.getElementById('player1').value || 'Player 1';
    let player2 = document.getElementById('player2').value || 'Player 2';
    diceGame([player1, player2]);
});

document.getElementById('newGameButton').addEventListener('click', function() {
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.getElementById('results').innerHTML = '';
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1Score').innerText = 'Player 1: 0';
    document.getElementById('player2Score').innerText = 'Player 2: 0';
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceGame(players) {
    let highestRoll = 0;
    let winner = '';
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const diceEmoji = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    for(let i = 0; i < players.length; i++) {
        let roll = rollDice();
        resultsDiv.innerHTML += `${players[i]} rolled <span class="dice">${diceEmoji[roll]}</span><br>`;

        if(roll > highestRoll) {
            highestRoll = roll;
            winner = players[i];
        }

        if(i === 0) {
            player1Score += roll;
            document.getElementById('player1Score').innerText = `${players[i]}: ${player1Score}`;
        } else {
            player2Score += roll;
            document.getElementById('player2Score').innerText = `${players[i]}: ${player2Score}`;
        }
    }

    resultsDiv.innerHTML += `${winner} wins with a roll of <span class="dice">${diceEmoji[highestRoll]}</span>!`;
}

// document.getElementById('rollButton').addEventListener('click', function() {
//     this.disabled = true; // disable the button to prevent multiple clicks
//     setTimeout(() => {
//         let player1 = document.getElementById('player1').value || 'Player 1';
//         let player2 = document.getElementById('player2').value || 'Player 2';
//         diceGame([player1, player2]);
//         this.disabled = false; // re-enable the button after the dice roll
//     }, 3000); // delay of 3 seconds
// });

function diceGame(players) {

    let highestRoll = 0;
    let winner = '';
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const diceEmoji = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    for(let i = 0; i < players.length; i++) {
        let roll = rollDice();
        resultsDiv.innerHTML += `${players[i]} rolled <span class="dice">${diceEmoji[roll]}</span><br>`;

        if(roll > highestRoll) {
            highestRoll = roll;
            winner = players[i];
        }

        if(i === 0) {
            player1Score += roll;
            document.getElementById('player1Score').innerText = `${players[i]}: ${player1Score}`;
            if(player1Score >= 100) {
                resultsDiv.innerHTML += `${players[i]} wins the game with a score of 100!`;
                resetGame();
                return;
            }
        } else {
            player2Score += roll;
            document.getElementById('player2Score').innerText = `${players[i]}: ${player2Score}`;
            if(player2Score >= 100) {
                document.querySelector('.congratulations').style.display = 'block';

                resultsDiv.innerHTML += `${players[i]} wins the game with a score of 100!`;
                resetGame();
                return;
            }
        }
    }


        if(i === 0) {
            player1Score += roll;
            document.getElementById('player1Score').innerText = `${players[i]}: ${player1Score}`;
            if(player1Score >= 100) {
                alert(`Game Over! ${players[i]} wins the game with a score of 100!`);
                resetGame();
                return;
            }
        } else {
            player2Score += roll;
            document.getElementById('player2Score').innerText = `${players[i]}: ${player2Score}`;
            if(player2Score >= 100) {
                alert(`Game Over! ${players[i]} wins the game with a score of 100!`);
                resetGame();
                return;
            }
        }
    }
    resultsDiv.innerHTML += `${winner} wins with a roll of <span class="dice">${diceEmoji[highestRoll]}</span>!`;
    resetGame();



function resetGame() {
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1Score').innerText = 'Player 1: 0';
    document.getElementById('player2Score').innerText = 'Player 2: 0';
}