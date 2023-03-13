(function () {
    'use strict'
    console.log('reading js')
    const startGame = document.querySelector('#play');
    const gameScreen = document.querySelector('#gameScreen');
    const scoreOne = document.querySelector('#score1');
    const scoreTwo = document.querySelector('#score2');
    const rollScore = document.querySelector('#rollScore');
    const announce = document.querySelector('#announce');
    const actionArea = document.querySelector('#actions');

    const startGameSound = new Audio('sound/click.mp3');
    const gruntSound = new Audio('sounds/pig-grunt.mp3');
    const rollSound = new Audio('sounds/rolling-dice.mp3');
    const passSound = new Audio('sounds/cartoon-splat.mp3');
    const snakeEyesSound = new Audio('sound/pig-oink.mp3');

    const screenOne = document.querySelector('#wrapper');

    let gameData = {
        dice: ['d1.svg', 'd2.svg', 'd3.svg', 'd4.svg', 'd5.svg', 'd6.svg',],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 30
    }

    document.querySelector('#quit').addEventListener('click', function () {
        screenOne.className = 'showing';
        gameScreen.className = 'hidden';

        //NEED TO ADD RULES TO RESET GAME HERE
        gameData = ''
    })

    startGame.addEventListener('click', function () {
        // NEED HELP - startGame Button not playing sound when pressed
        startGameSound.play();
        //changes from rules to game screen
        screenOne.className = 'hidden';
        gameScreen.className = 'showing';

        //randomly sets the game index
        gameData.index = Math.round(Math.random());
        console.log(`index: ${gameData.index}`);

        setUpTurn();
    })

    function whoseTurn(){
        //sets the pink outline to player img to indicate who's turn it is
        if (gameData.index == 0) {
            document.querySelector('#p1').className = 'playerTurn pigImg';
            document.querySelector('#p2').classList.remove('playerTurn');
        }
        else if (gameData.index == 1) {
            document.querySelector('#p2').className = 'playerTurn pigImg';
            document.querySelector('#p1').classList.remove('playerTurn');
        }
    }

    function setUpTurn() {
        

        // announces which player's turn it is
        console.log(`index: ${gameData.index}`);
        console.log(gameData.players[gameData.index])
        announce.innerHTML = `Roll the dice for &nbsp;<strong>${gameData.players[gameData.index]}</strong>`;
        rollScore.innerHTML = "Let's go!";

        //sets the pink outline to player img to indicate who's turn it is
        whoseTurn();

        document.querySelector('#roll').addEventListener('click', function () {
                gruntSound.play();

            rollTheDice();
        })

        document.querySelector('#pass').addEventListener('click', function () {
            passSound.play();

            console.log(`current score when pass was clicked / 1: ${gameData.score[0]} / ${gameData.score[1]}`)
            //switches player turn
            gameData.index 
            ? (gameData.index = 0) 
            : (gameData.index = 1);
            announce.innerHTML = `Roll the dice for &nbsp;<strong>${gameData.players[gameData.index]}</strong>`;

            //sets the pink outline to player img to indicate who's turn it is
            whoseTurn();
        })
    }

    function rollTheDice() {
        console.log(`current score before roll / 1: ${gameData.score[0]} / 2: ${gameData.score[1]}`);
        actionArea.innerHTML = '';

        //get random values for 1-6 for the turn score
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        //roll dice sound 
        function delaySound(){
            rollSound.play();
        }
        setTimeout(delaySound, 300);

        //put the dice images on the screen; the dice array index needs to be 1 less than roll1 and roll2
        actionArea.innerHTML = `<img src="images/${gameData.dice[gameData.roll1 - 1]}"> 
                                <img src="images/${gameData.dice[gameData.roll2 - 1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;


        //if two 1's / snake eyes are rolled
        if (gameData.rollSum === 2){
            console.log('snake eyes');
            rollScore.innerHTML = 'Oh snap! Snake eyes!';
            gameData.score[gameData.index] = 0;

            rollSound.pause();
            snakeEyesSound.play();

            //switches players
            gameData.index 
                ? (gameData.index = 0)
                : (gameData.index = 1);
            // NEED HELP - is saying switching to wrong player
            announce.innerHTML = `switching to &nbsp;<strong>${gameData.players[gameData.index ]}</strong>`;
            setTimeout(setUpTurn, 2000);
        }
        //if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice is a 1');
            rollScore.innerHTML = 'Sorry, one of your rolls was a 1!';

            rollSound.pause();
            passSound.play();

            //switches players
            gameData.index 
                ? (gameData.index = 0)
                : (gameData.index = 1);
            announce.innerHTML = `switching to &nbsp;<strong>${gameData.players[gameData.index]}</strong>`;
            setTimeout(setUpTurn, 2000);
        }
        //if niether die is a 1 
        else {
            console.log('the game proceeds');
            rollScore.innerHTML = `+${gameData.rollSum}`;
            gameData.score[gameData.index] += gameData.rollSum;
            checkWinningFunction();
        }   
    }

    function checkWinningFunction() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            showCurrentScore();

            announce.innerHTML = `<strong>${[gameData.players[gameData.index]]}</strong>&nbsp; wins with &nbsp;<strong>${gameData.score[gameData.index]}&nbsp;points</strong>!`;

            actionArea.innerHTML = '<button class="primaryButton">Start a New Game?</button>';
            //add reset points to 0?
        }
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        scoreOne.innerHTML = `${gameData.score[0]}`;
        scoreTwo.innerHTML = `${gameData.score[1]}`;
    }

    //need connecting function between names entered for players and play screen

}())