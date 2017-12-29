// tslint:disable-next-line:class-name
export interface BlockInterface {
  rotateId: number;
  // body: number[];
  create(data: number[][]): void;
  rotate(data: number[][]): void;
}
