(function () {
    'use strict'
    console.log('reading js')
    const startGame = document.querySelector('#play');
    const gameScreen = document.querySelector('#gameScreen');
    const scoreOne = document.querySelector('#score1');
    const scoreTwo = document.querySelector('#score2');
    const announce = document.querySelector('#announce');
    const actionArea = document.querySelector('#actions');

    const screenOne = document.querySelector('#wrapper');

    let gameData = {
        dice: ['d1.svg', 'd2.svg', 'd3.svg', 'd4.svg', 'd5.svg', 'd6.svg',],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 100
    }

    startGame.addEventListener('click', function () {
        //changes from rules to game screen
        screenOne.className = 'hidden';
        gameScreen.className = 'showing';
        //randomly set the game index
        gameData.index = Math.round(Math.random());
        console.log(`index: ${gameData.index}`);

        document.querySelector('#quit').addEventListener('click', function () {
            screenOne.className = 'showing';
            gameScreen.className = 'hidden';
        })
        setUpTurn();
    })

    function setUpTurn() {
        // announces which player's turn it is
        announce.innerHTML = `Roll the dice for ${gameData.players[gameData.index]}`;

        //sets the pink outline to player img to indicate who's turn it is NEED HELP
        if (gameData.players = 'player 1') {
            document.querySelector('#p1').style.border = 'solid #F79489 8px'
        }
        else {
            document.querySelector('#p2').style.border = 'solid #F79489 8px'
        }

        document.querySelector('#roll').addEventListener('click', function () {
            rollTheDice();
        })
    }

    function rollTheDice() {
        actionArea.innerHTML = '';

        //get random values for 1-6 for the turn score
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        // declares who's turn it is and provides user feedback throughout game NEED HELP
        announce.innerHTML = `+${gameData.rollSum}`;

        //put the dice images on the screen; the dice array index needs to be 1 less than roll1 and roll2
        actionArea.innerHTML = `<img src="images/${gameData.dice[gameData.roll1 - 1]}"> 
                                <img src="images/${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        document.querySelector('#pass').addEventListener('click', function () {
            //switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
        })
    }

    function checkWinningFunction() {
        if (gameData.score[gameData.index] > gameData.End) {
            announce.innerHTML = `${[gameData.players[gameData.index]]} wins with ${gameData.score[gameData.index]} points!`;

            actionArea.innerHTML = '<p>Start a new game';
            document.querySelector('#quit').innerHTML = 'Start a New Game?';
        }
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        scoreOne.innerHTML = `${gameData.players[0]}`;
        scoreTwo.innerHTML = `${gameData.players[1]}`;
    }

    //need connecting function between names entered for players and play screen

}())