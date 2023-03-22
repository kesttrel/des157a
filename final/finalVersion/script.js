(function () {
    'use strict'
    console.log('reading js')
   
    const goButton = document.querySelector('#goButton');
    const startGame = document.querySelector('#play');

    const scoreOne = document.querySelector('#score1');
    const scoreTwo = document.querySelector('#score2');
    const rollScore = document.querySelector('#rollScore');

    //Variables to communicate with players throughout the game
    const announce = document.querySelector('#announce');
    const actionArea = document.querySelector('#actions');

    //Game Sounds
    const gruntSound2 = new Audio('sounds/pig-sound.mp3');
    const startGameSound = new Audio('sounds/click.mp3');
    const gruntSound = new Audio('sounds/pig-grunt.mp3');
    const rollSound = new Audio('sounds/rolling-dice.mp3');
    const passSound = new Audio('sounds/cartoon-splat.mp3');
    const snakeEyesSound = new Audio('sounds/pig-oink.mp3');

    // Components
    const headr = document.querySelector('header');

    const screenOne = document.querySelector('#wrapper');
    const gameScreen = document.querySelector('#gameScreen');
    //Rule Modal Variables
    const rulesModal = document.querySelector('#rulesModal');
    const bgDark = document.querySelector('#bgDark');
    const rulesButton = document.querySelector('#rulesButton');
    const xMarkIcon = document.querySelector('#xMarkIcon');

    //Game Data
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

    // "goButton" Loads Intro Page to ScreenOne
    goButton.addEventListener('click', function(){
        document.querySelector('#headerPig').className = 'rotate';

        gruntSound2.play();
        function loadNextPage() {
            screenOne.classList.remove('hidden');
            screenOne.className = 'showing';

            headr.className = 'hidden'; 
        }
        setTimeout(loadNextPage, 1800);
    })

    // Rules Modal Open 
    rulesButton.addEventListener('click', function(){
        bgDark.className = 'showing';
        rulesModal.className = 'showing';
    })
    xMarkIcon.addEventListener('click', function(){
        bgDark.className = 'hidden';
        rulesModal.className = 'hidden';
        bgDark.classList.remove('showing');
        rulesModal.classList.remove('showing');
    })
    window.addEventListener('click', function(e){
        if (e.target == bgDark) {
        bgDark.className = 'hidden';
        rulesModal.className = 'hidden';
        }
    })
    
    //Play Button
    startGame.addEventListener('click', function () {
        // NEED HELP - startGame Button not playing sound when pressed
        gruntSound.play();
        //changes from rules to game screen
        //add screenOne.classList.remove('');
        screenOne.className = 'hidden';
        gameScreen.className = 'showing';
        document.querySelector('footer a').className = 'hidden';

        //randomly sets the game index
        gameData.index = Math.round(Math.random());
        console.log(`index: ${gameData.index}`);

        setUpTurn();
    })

    //Quit Button
    document.querySelector('#quit').addEventListener('click', function () {
        screenOne.className = 'showing';
        gameScreen.className = 'hidden';

        //Resets the game through a reload
        location.reload();
    })

    //Sets player's name
    function playerName() {
        let p1Name = document.querySelector('#playerOne').value;
        let p2Name = document.querySelector('#playerTwo').value;

        if (p1Name != '') {
            document.querySelector('#p1PrintName').innerHTML = p1Name;
        }
        if (p1Name != '') {
            document.querySelector('#p2PrintName').innerHTML = p2Name;
        }
    }
    
    //Prink border around player image who's turn it is
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
    

    //Sets up the turn
    function setUpTurn() {
        //Announces which player's turn it is
        console.log(`index: ${gameData.index}`);
        console.log(gameData.players[gameData.index])
        //Assings Player's name iputs if given
        playerName();
        //Sets a pink border to player img to indicate who's turn it is
        whoseTurn();
        //Roll Button
        document.querySelector('#roll').addEventListener('click', function () {
        gruntSound2.play();
        setTimeout(rollTheDice, 250);
        })
        //Pass Button
        document.querySelector('#pass').addEventListener('click', function () {
            gruntSound.play();

            console.log(`current score when pass was clicked / 1: ${gameData.score[0]} / ${gameData.score[1]}`)
            //switches player turn
            gameData.index 
            ? (gameData.index = 0) 
            : (gameData.index = 1);

            //sets the pink outline to player img to indicate who's turn it is
            whoseTurn();
        })
    }

    function rollTheDice() {
        console.log(`current score before roll / 1: ${gameData.score[0]} / 2: ${gameData.score[1]}`);
        actionArea.innerHTML = '';
        announce.innerHTML = '';

        //get random values for 1-6 for the turn score
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        //Delays and plays roll dice sound 
        function delaySound(){
            rollSound.play();
        }
        setTimeout(delaySound, 200);

        //Puts the dice images on the screen; the dice array index needs to be 1 less than roll1 and roll2
        actionArea.className = 'dice';
        actionArea.innerHTML = `<img src="images/${gameData.dice[gameData.roll1 - 1]}"> 
                                <img src="images/${gameData.dice[gameData.roll2 - 1]}">`;

        //Calculates Roll Sum
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //If two 1's / Snake Eyes are rolled
        if (gameData.rollSum === 2){
            console.log('snake eyes');
            rollScore.innerHTML = 'Oh snap! Snake eyes!';

            gruntSound.pause();
            rollSound.pause();
            snakeEyesSound.play();

            //switches players
            gameData.index 
                ? (gameData.index = 0)
                : (gameData.index = 1);
            announce.innerHTML = 'Passing turn'; 
            gameData.score[gameData.index] = 0;
            setUpTurn();
        }
        //If either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice is a 1');
            rollScore.innerHTML = `Sorry, one of your rolls was a 1!`;

            gruntSound.pause();
            gruntSound2.play();

            //switches players
            gameData.index 
                ? (gameData.index = 0)
                : (gameData.index = 1);
            announce.innerHTML = 'Passing turn';
            setUpTurn();
        }
        //If niether die is a 1 
        else {
            console.log('the game proceeds');
            rollScore.innerHTML = `+${gameData.rollSum}`;
            gameData.score[gameData.index] += gameData.rollSum;
            announce.innerHTML = 'Roll again?';
            checkWinningFunction(); 
        }  
    }

    function checkWinningFunction() {
        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            showCurrentScore();

            announce.innerHTML = `<strong>${[gameData.players[gameData.index]]}</strong>&nbsp; wins with &nbsp;<strong>${gameData.score[gameData.index]}&nbsp;points</strong>!`;

            actionArea.innerHTML = '<button class="primaryButton" id="startNewGame">Start a New Game?</button>';

            //
            document.querySelector('#startNewGame').addEventListener('click', function(){
                location.reload();
            })
            rollScore = '';
            announce = '';
        }
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        scoreOne.innerHTML = `${gameData.score[0]}`;
        scoreTwo.innerHTML = `${gameData.score[1]}`;
    }
}())