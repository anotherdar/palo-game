// This file contains all the constants used in the game
const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-button');

const gameScreen = document.querySelector('#game-screen');

// player
const player = document.querySelector('#player-health');
const playerHp = document.querySelector('#player-hp');

// enemy
const enemy = document.querySelector('#enemy-health');
const enemyHp = document.querySelector('#enemy-hp');

// controls
const attackButton = document.querySelector('#attack-button');
const spAttackButton = document.querySelector('#sp-attack-button');
const healButton = document.querySelector('#heal-button');

// log
const log = document.querySelector('#log');

// end screen
const endScreen = document.querySelector('#end-screen');
const endButton = document.querySelector('#end-button');
const endMessage = document.querySelector('#end-game-title');

export {
    startScreen,
    startButton,
    gameScreen,
    player,
    playerHp,
    enemy,
    enemyHp,
    endMessage,
    attackButton,
    spAttackButton,
    healButton,
    log,
    endScreen,
    endButton
};