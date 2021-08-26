const boardTemplate = ((sizeBoard, container) => {
  const gameContainer = container;
  let cell;

  for (let i = 0; i < sizeBoard * sizeBoard; i += 1) {
    cell = document.createElement('div');
    cell.classList.add('cell');
    gameContainer.appendChild(cell);
  }
});

export default boardTemplate;
