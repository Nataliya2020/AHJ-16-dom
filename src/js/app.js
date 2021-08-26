import GamePlay from './GamePlay';

const gamePlay = new GamePlay(4);

gamePlay.bindToDOM(document.querySelector('.game-container'));
gamePlay.init();
