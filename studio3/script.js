(function(){
    'use strict'
    console.log('reading js')
    const gameControl = document.querySelector('#gamecontrol');
    const play = document.querySelector('#play');
    const game = document.querySelector('#game');
    const score = document.querySelector('score');
    let actionArea = document.querySelector('#actions');

    const screenOne = document.querySelector('#screenOne')

    let gameData = {
        dice: ['d1.svg', 'd2.svg', 'd3.svg','d4.svg', 'd5.svg', 'd6.svg',],
        players: ['player 1', 'player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 100
    }

    play.addEventListener('click', function(){
        //changes from rules to game screen
        screenOne.className('showing') === 'hidden';
         //randomly set the game index
        gameData.index = Math.round(Math.random());
        console.log(`index: ${gameData.index}`);

        document.querySelector('#quit').addEventListener('click', function(){
            //set quit function
        })
        setUpTurn();
    })

    function setUpTurn(){
        gameScreen.className('hidden') === 'showing';

        document.querySelector('#roll').addEventListener('click', function(){
            //call roll the dice function
        })
    }
    
}())