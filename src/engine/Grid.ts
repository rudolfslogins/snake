import { Cell } from "./Cell";
import { Configuration, CELLS_HORIZONTAL, CELLS_VERTICAL } from "./Configuration";
import { Snake } from "./Snake";

export class Grid {
  private configuration: Configuration;
  apples = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)
  ];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(snake: Snake): void {
    for (; this.apples.length < this.configuration.level + this.configuration.apples;) {
      var randX = Math.floor(Math.random() * CELLS_HORIZONTAL);
      var randY = Math.floor(Math.random() * CELLS_VERTICAL);   
      
    if (!this.apples.find(c => c.x === randX && c.y === randY)
    && snake.getHead().x !== randX && snake.getHead().y !== randY
    && !snake.getTail().some(c => c.x === randX && c.y === randY)){
      this.apples.push(new Cell(randX, randY));
    }
    }
  }

  isAppleInside(cell: Cell): boolean {

    return this.apples.find(apple => apple.x === cell.x && apple.y === cell.y) != undefined;
  }

  removeApple(cell: Cell): void {
    const apple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)!;
    const i = this.apples.indexOf(apple);
    this.apples.splice(i, 1);
  }

  isDone(): boolean {
    if (this.apples.length === 0){
      return true;
    }
    else{
      return false;
    }
  }
  getApples(): Cell[] {
    return this.apples;
  }
}
