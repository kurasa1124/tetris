import { BlockInterface } from './block.interface';
export class Square implements BlockInterface {
  rotateId = 0;
  public create(data: number[][]) {
    data[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
    data[1] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
    // return [
    //   [0, 0, 0, 0, -1, -1, 0, 0, 0, 0],
    //   [0, 0, 0, 0, -1, -1, 0, 0, 0, 0]
    // ];
  }
  rotate(): void {
  }
}
