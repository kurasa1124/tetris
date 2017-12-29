import { BlockInterface } from './block.interface';

// tslint:disable-next-line:class-name
export class IBlock implements BlockInterface {
  rotateId = 0;
  public create(data: number[][]) {
    data[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data[1] = [0, 0, 0, -1, -1, -1, -1, 0, 0, 0];

  }
  // tslint:disable-next-line:member-ordering
  public rotate(data: number[][]): void {
    const items = data;
    switch (this.rotateId) {
      case 0:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (items[y][x] === -1 && items[y][x + 3] === -1 && items[y + 1][x] === 0 && items[y + 2][x] === 0 && items[y + 3][x] === 0) {
              items[y][x + 1] = 0;
              items[y][x + 2] = 0;
              items[y][x + 3] = 0;
              items[y + 1][x] = -1;
              items[y + 2][x] = -1;
              items[y + 3][x] = -1;
              this.rotateId = 1;
            }
          }
        }
        break;
      case 1:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (items[y][x] === -1 && items[y + 1][x] === -1 && items[y][x + 1] === 0 && items[y][x + 2] === 0 && items[y][x + 3] === 0) {
              items[y][x + 1] = -1;
              items[y][x + 2] = -1;
              items[y][x + 3] = -1;
              items[y + 1][x] = 0;
              items[y + 2][x] = 0;
              items[y + 3][x] = 0;
              this.rotateId = 0;
            }
          }
        }
        break;
    }
  }
}
