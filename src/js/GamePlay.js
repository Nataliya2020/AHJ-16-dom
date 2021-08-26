import boardTemplate from './boardTemplate';
import movePC from './movePC';

import Goblin from './Goblin';

import redrawPositions from './redrawPosition';

export default class GamePlay {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.container = null;
  }

  init() {
    boardTemplate(this.boardSize, this.container);
    const goblin = new Goblin('goblin');
    redrawPositions(goblin);
    movePC();
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }
}
