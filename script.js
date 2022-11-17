var round = 0;
var playerScore = 0;
var computerScore = 0;

function submitUserDetails() {
	player = document.getElementById("name").value;
    document.getElementById("name-visible").innerHTML = player;
    document.getElementById("hide-details").style.display = "none"; // Hides the form element
    document.getElementById("rules").style.display = "block"
    document.getElementById("play-button").style.display = "block";
}

function generateComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3) + 1; // Will always output 1, 2 or 3
    return computerChoice;
}

function playRound() {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("next-round-button").style.display = "flex";
    document.getElementById("main-1").style.display = "none";
    document.getElementById("main-2").style.display = "flex";

    var winner = 0; // 0 draw, 1 player win, 2 computer win
    var playerChoice = parseInt(prompt("\n" + player + ", choose your shape:\n1 for Rock, 2 for Paper, 3 for Scissors"));
    var computerChoice = generateComputerChoice();

    while (playerChoice != 1 && playerChoice != 2 && playerChoice != 3) {
        alert("Number entered needs to be 1, 2 or 3!");
        playerChoice = parseInt(prompt("\n" + player + ", choose your shape:\n1 for Rock, 2 for Paper, 3 for Scissors"));
    }

    if (playerChoice == 1) {
        alert("You have chosen Rock");
    }

    else if (playerChoice == 2) {
        alert("You have chosen Paper");
    }

    else {
        alert("You have chosen Scissors")
    }

    // User picks Rock
    if (playerChoice == 1) {
        // Three possible choices the computer can make
        if (computerChoice == 3) {
            alert("You win!\nYou picked rock while the computer picked scissors!");
            playerScore++;
            winner = 1;
        }

        else if (computerChoice == 2) {
            alert("You lose!\nYou picked rock while the computer picked paper!");
            computerScore++;
            winner = 2;
        }

        else {
            alert("You both picked rock so this round is a draw!");
            winner = 0;
        }
    }

    // User picks Paper
    else if (playerChoice == 2) {
        if (computerChoice == 1) {
            alert("You win!\nYou picked paper while the computer picked rock!");
            playerScore++;
            winner = 1;
        }

        else if (computerChoice == 3) {
            alert("You lose!\nYou picked paper while the computer picked scissors!");
            computerScore++;
            winner = 2;
        }

        else {
            alert("You both picked paper so this round is a draw!");
            winner = 0;
        }
    }

    // User picks Scissors
    else {
        if (computerChoice == 2) {
            alert("You win!\nYou picked scissors while the computer picked paper!");
            playerScore++;
            winner = 1;
        }

        else if (computerChoice == 1) {
            alert("You lose!\nYou picked scissors while the computer picked rock!");
            computerScore++;
            winner = 2;
        }

        else {
            alert("You both picked scissors so this round is a draw!");
            winner = 0;
        }
    }

    round++;
    determineRoundWinner(round, winner, playerScore, computerScore);
}

// Function to fill in winner by round table
function determineRoundWinner(round, winner, playerScore, computerScore) {
    if (winner == 1) {
        newString = ("player-round-" + round);
        document.getElementById(newString).style.color = "sienna";
    }

    else if (winner == 2) {
        newString = ("computer-round-" + round);
        document.getElementById(newString).style.color = "sienna";
    }

    else {
        newString1 = ("player-round-" + round);
        newString2 = ("computer-round-" + round);
        document.getElementById(newString1).innerHTML = "Draw";     
        document.getElementById(newString1).style.color = "sienna";
        document.getElementById(newString2).innerHTML = "Draw";
        document.getElementById(newString2).style.color = "sienna";
    }

    // Logic to stop game short if winner already determined
    if (round == 5 || (Math.abs(playerScore - computerScore)) > (5 - round)) {
        document.getElementById("main-2").style.display = "none"
        document.getElementById("game-over").style.display = "flex"
        printWinner(playerScore, computerScore);
    }
}

function printWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        document.getElementById("winner").innerHTML = "Congratulations " + player + ", you beat the computer!";
    }

    else if (playerScore < computerScore) {
        document.getElementById("winner").innerHTML = "Hard luck " + player + ", the computer beat you";
    }

    else {
        document.getElementById("winner").innerHTML = "It was a draw";       
    }
}