import getCells from './getPos';
import Goblin from './Goblin';
import redrawPosition from './redrawPosition';

function movingPC() {
  const cells = getCells();
  let personIndex = null;

  cells.forEach((cell, index) => {
    if (cell.children.length > 0) {
      personIndex = index;
      cell.firstChild.remove();
    }
  });

  let goblin = new Goblin('goblin');

  while (goblin.position === personIndex) {
    goblin = new Goblin('goblin');
  }
  redrawPosition(goblin);
}

export default function movePC() {
  setInterval(movingPC, 1000);
}
