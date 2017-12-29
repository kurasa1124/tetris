import { Component, OnInit } from '@angular/core';
import { IBlock } from '../allBlock/iBlock.class';
import { TBlock } from '../allBlock/tBlock.class';
import { Square } from '../allBlock/square.class';




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
// tslint:disable-next-line:class-name
export class game implements OnInit {
  public items = [];
  public drop = 0;
  public timeID = null;
  public rotate = 0;

  // 遊戲背景生成
  public putArray() {
    for (let y = 0; y < 22; y++) {
      const temp: number[] = [];
      for (let x = 0; x < 10; x++) {
        temp.push(0);
      }
      this.items.push(temp);
    }
  }


  // 各種方塊
  // public square() {
  //   this.items[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
  //   this.items[1] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
  // }
  // public tBlock() {
  //   this.items[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
  //   this.items[1] = [0, 0, 0, 0, 0, -1, 0, 0, 0, 0];
  // }
  // public iBlock() {
  //   this.items[0] = [0, 0, 0, -1, -1, -1, -1, 0, 0, 0];
  // }
  public lBlock() {
    this.items[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
    this.items[1] = [0, 0, 0, 0, -1, 0, 0, 0, 0, 0];
  }
  public jBlock() {
    this.items[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
    this.items[1] = [0, 0, 0, 0, 0, 0, -1, 0, 0, 0];
  }
  public zBlock() {
    this.items[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
    this.items[1] = [0, 0, 0, 0, 0, -1, -1, 0, 0, 0];
  }
  public sBlock() {
    this.items[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
    this.items[1] = [0, 0, 0, -1, -1, 0, 0, 0, 0, 0];
  }


  // 隨機生成方塊
  // tslint:disable-next-line:member-ordering
  public blockNumber: number;
  public block;
  // tslint:disable-next-line:member-ordering
  public blocks = [Square, TBlock, IBlock];
  public randomBlock() {
    this.blockNumber = Math.round(Math.random() * 2);
    this.block = new this.blocks[this.blockNumber]();
    const blockData = this.block.create(this.items);
    console.log(this.block);
    // switch (this.blockNumber) {
    //   case 0:
    //     return this.square();
    //   case 1:
    //     return this.tBlock();
    //   case 2:
    //     return this.iBlock();
    //   case 3:
    //     return this.lBlock();
    //   case 4:
    //     return this.jBlock();
    //   case 5:
    //     return this.zBlock();
    //   case 6:
    //     return this.sBlock();
    // }
    // return this.blockNumber ? this.square() : this.tBlock();
  }

  // 開始遊戲
  public playGame() {
    this.randomBlock();
    this.timeID = setInterval(() => {
      if (this.downStop()) {
        this.down();
      } else {
        this.absData();
        this.rotate = 0;
        this.clear();
        this.gameOver();
        this.randomBlock();
      }
    }, 500);
  }

  // 下降
  public down() {
    for (let y = 20; y >= 0; y--) {
      while (1) {
        const block = this.items[y].indexOf(-1);
        // tslint:disable-next-line:curly
        if (block === -1) break;
        if (this.items[y + 1][block] === 0) {
          this.items[y][block] = 0;
          this.items[y + 1][block] = -1;
        } else {
          break;
        }
      }
    }
  }

  // 停止時負轉正
  public absData() {
    for (let y = 0; y < 22; y++) {
      for (let x = 0; x < 10; x++) {
        this.items[y][x] = Math.abs(this.items[y][x]);
      }
    }
  }

  // 鍵盤事件
  public keyEvent() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (this.downStop()) {
        this.direction(event);
      }
    });
  }

  // 鍵盤方向
  public direction(event) {
    switch (event.code) {
      case 'ArrowRight':
        if (this.rightStop()) {
          for (let y = 20; y >= 0; y--) {
            for (let x = 9; x >= 0; x--) {
              if (this.items[y][x] === -1 && this.items[y][x + 1] === 0) {
                this.items[y][x] = 0;
                this.items[y][x + 1] = -1;
              }
            }
          }
        }
        break;
      case 'ArrowLeft':
        if (this.leftStop()) {
          for (let y = 20; y >= 0; y--) {
            for (let x = 0; x <= 9; x++) {
              if (this.items[y][x] === -1 && this.items[y][x - 1] === 0) {
                this.items[y][x] = 0;
                this.items[y][x - 1] = -1;
              }
            }
          }
        }
        break;
      case 'ArrowDown':
        for (let y = 20; y >= 0; y--) {
          for (let x = 0; x <= 9; x++) {
            if (this.items[y][x] === -1 && this.items[y + 1][x] === 0) {
              this.items[y][x] = 0;
              this.items[y + 1][x] = -1;
            }
          }
        }
        break;

      // 按空白鍵旋轉
      case 'Space':
        this.block.rotate(this.items);
      // switch (this.blockNumber) {
      //   case 1:
      //     this.tBlockRotate();
      //     break;
      //   case 2:
      //     this.iBlockRotate();
      //     break;
      //   case 3:
      //     this.lBlockRotate();
      //     break;
      //   case 4:
      //     this.jBlockRotate();
      //     break;
      //   case 5:
      //     this.zBlockRotate();
      //     break;
      //   case 6:
      //     this.sBlockRotate();
      //     break;
      // }
      // break;
    }
  }

  // 判斷整塊移動
  public downStop() {
    for (let y = 21; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        if (this.items[y][x] === -1 && (y + 1 > 21 || this.items[y + 1][x] > 0)) {
          return false;
        }
      }
    }
    return true;
  }
  public rightStop() {
    for (let y = 21; y >= 0; y--) {
      for (let x = 9; x >= 0; x--) {
        if (this.items[y][x] === -1 && (x + 1 > 9 || this.items[y][x + 1] > 0)) {
          return false;
        }
      }
    }
    return true;
  }
  public leftStop() {
    for (let y = 21; y >= 0; y--) {
      for (let x = 0; x <= 9; x++) {
        if (this.items[y][x] === -1 && (x - 1 < 0 || this.items[y][x - 1] > 0)) {
          return false;
        }
      }
    }
    return true;
  }

  // T型旋轉
  // public tBlockRotate() {
  //   switch (this.rotate) {
  //     case 0:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           if (this.items[y][x] === -1 && this.items[y][x + 1] === -1 && this.items[y][x + 2] === -1) {
  //             this.items[y - 1][x + 1] = -1;
  //             this.items[y][x + 2] = 0;
  //             this.rotate = 1;
  //           }
  //         }
  //       }
  //       break;
  //     case 1:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           if (this.items[y][x] === -1 && this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y][x + 2] === 0) {
  //             this.items[y + 1][x + 1] = 0;
  //             this.items[y][x + 2] = -1;
  //             this.rotate = 2;
  //           }
  //         }
  //       }
  //       break;
  //     case 2:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           if (this.items[y][x] === -1 && this.items[y - 1][x + 1] === -1 && this.items[y][x + 1] === -1 && this.items[y][x + 2] === -1) {
  //             this.items[y][x] = 0;
  //             this.items[y + 1][x + 1] = -1;
  //             this.rotate = 3;
  //           }
  //         }
  //       }
  //       break;
  //     case 3:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           // tslint:disable-next-line:max-line-length
  //           if (this.items[y + 1][x] === 0 && this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === -1 && this.items[y + 1][x + 2] === -1) {
  //             this.items[y + 1][x] = -1;
  //             this.items[y][x + 1] = 0;
  //             this.rotate = 0;
  //           }
  //         }
  //       }
  //       break;
  //   }
  // }
  // I型旋轉
  // public iBlockRotate() {
  //   switch (this.rotate) {
  //     case 0:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           // tslint:disable-next-line:max-line-length
  //           if (this.items[y][x] === -1 && this.items[y][x + 3] === -1 && this.items[y + 1][x] === 0 && this.items[y + 2][x] === 0 && this.items[y + 3][x] === 0) {
  //             this.items[y][x + 1] = 0;
  //             this.items[y][x + 2] = 0;
  //             this.items[y][x + 3] = 0;
  //             this.items[y + 1][x] = -1;
  //             this.items[y + 2][x] = -1;
  //             this.items[y + 3][x] = -1;
  //             this.rotate = 1;
  //           }
  //         }
  //       }
  //       break;
  //     case 1:
  //       for (let y = 0; y <= 20; y++) {
  //         for (let x = 0; x <= 9; x++) {
  //           // tslint:disable-next-line:max-line-length
  //           if (this.items[y][x] === -1 && this.items[y + 1][x] === -1 && this.items[y][x + 1] === 0 && this.items[y][x + 2] === 0 && this.items[y][x + 3] === 0) {
  //             this.items[y][x + 1] = -1;
  //             this.items[y][x + 2] = -1;
  //             this.items[y][x + 3] = -1;
  //             this.items[y + 1][x] = 0;
  //             this.items[y + 2][x] = 0;
  //             this.items[y + 3][x] = 0;
  //             this.rotate = 0;
  //           }
  //         }
  //       }
  //       break;
  //   }
  // }
  // L型旋轉
  public lBlockRotate() {
    switch (this.rotate) {
      case 0:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:curly
            // tslint:disable-next-line:max-line-length
            if (this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x] === -1 && this.items[y + 2][x + 1] === 0) {
              this.items[y + 1][x] = 0;
              this.items[y + 1][x + 2] = 0;
              this.items[y + 2][x] = 0;
              this.items[y][x] = -1;
              this.items[y][x + 1] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 1;
            }
          }
        }
        break;
      case 1:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === -1 && this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === -1 && this.items[y][x + 2] === 0 && this.items[y + 1][x + 2] === 0) {
              this.items[y][x] = 0;
              this.items[y][x + 1] = 0;
              this.items[y + 2][x + 1] = 0;
              this.items[y][x + 2] = -1;
              this.items[y + 1][x] = -1;
              this.items[y + 1][x + 1] = -1;
              this.items[y + 1][x + 2] = -1;
              this.rotate = 2;
            }
          }
        }
        break;
      case 2:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x + 2] === -1 && this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x + 1] === 0 && this.items[y + 2][x + 2] === 0) {
              this.items[y][x + 2] = 0;
              this.items[y + 1][x] = 0;
              this.items[y + 1][x + 2] = 0;
              this.items[y][x + 1] = -1;
              this.items[y + 2][x + 2] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 3;
            }
          }
        }
        break;
      case 3:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === -1 && this.items[y + 2][x + 2] === -1 && this.items[y + 1][x] === 0 && this.items[y + 2][x] === 0) {
              this.items[y][x + 1] = 0;
              this.items[y + 2][x + 2] = 0;
              this.items[y + 2][x + 1] = 0;
              this.items[y + 1][x] = -1;
              this.items[y + 1][x + 2] = -1;
              this.items[y + 2][x] = -1;
              this.rotate = 0;
            }
          }
        }
        break;
    }
  }
  // J型旋轉
  public jBlockRotate() {
    switch (this.rotate) {
      case 0:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:curly
            // tslint:disable-next-line:max-line-length
            if (this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x + 2] === -1 && this.items[y + 2][x] === 0 && this.items[y + 2][x + 1] === 0) {
              this.items[y + 1][x] = 0;
              this.items[y + 1][x + 2] = 0;
              this.items[y + 2][x + 2] = 0;
              this.items[y][x + 1] = -1;
              this.items[y + 2][x] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 1;
            }
          }
        }
        break;
      case 1:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === 0 && this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x] === -1 && this.items[y + 1][x + 2] === 0) {
              this.items[y][x + 1] = 0;
              this.items[y + 2][x] = 0;
              this.items[y + 2][x + 1] = 0;
              this.items[y][x] = -1;
              this.items[y + 1][x] = -1;
              this.items[y + 1][x + 1] = -1;
              this.items[y + 1][x + 2] = -1;
              this.rotate = 2;
            }
          }
        }
        break;
      case 2:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === -1 && this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x + 1] === 0) {
              this.items[y][x] = 0;
              this.items[y + 1][x] = 0;
              this.items[y + 1][x + 2] = 0;
              this.items[y][x + 1] = -1;
              this.items[y][x + 2] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 3;
            }
          }
        }
        break;
      case 3:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === 0 && this.items[y][x + 1] === -1 && this.items[y][x + 2] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === -1) {
              this.items[y][x + 1] = 0;
              this.items[y][x + 2] = 0;
              this.items[y + 2][x + 1] = 0;
              this.items[y + 1][x] = -1;
              this.items[y + 1][x + 2] = -1;
              this.items[y + 2][x + 2] = -1;
              this.rotate = 0;
            }
          }
        }
        break;
    }
  }
  // Z型旋轉
  public zBlockRotate() {
    switch (this.rotate) {
      case 0:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === -1 && this.items[y][x + 1] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x + 1] === 0) {
              this.items[y][x] = 0;
              this.items[y][x + 1] = 0;
              this.items[y][x + 2] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 1;
            }
          }
        }
        break;
      case 1:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x + 2] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 1][x + 2] === -1 && this.items[y + 2][x + 1] === -1 && this.items[y + 1][x] === 0) {
              this.items[y][x + 2] = 0;
              this.items[y + 2][x + 1] = 0;
              this.items[y][x] = -1;
              this.items[y][x + 1] = -1;
              this.rotate = 0;
            }
          }
        }
        break;
    }
  }
  // S型旋轉
  public sBlockRotate() {
    switch (this.rotate) {
      case 0:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x + 1] === -1 && this.items[y][x + 2] === -1 && this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === 0) {
              this.items[y][x + 1] = 0;
              this.items[y][x + 2] = 0;
              this.items[y][x] = -1;
              this.items[y + 2][x + 1] = -1;
              this.rotate = 1;
            }
          }
        }
        break;
      case 1:
        for (let y = 0; y <= 20; y++) {
          for (let x = 0; x <= 9; x++) {
            // tslint:disable-next-line:max-line-length
            if (this.items[y][x] === -1 && this.items[y + 1][x] === -1 && this.items[y + 1][x + 1] === -1 && this.items[y + 2][x + 1] === -1 && this.items[y][x + 2] === 0) {
              this.items[y + 2][x + 1] = 0;
              this.items[y][x] = 0;
              this.items[y][x + 2] = -1;
              this.items[y][x + 1] = -1;
              this.rotate = 0;
            }
          }
        }
        break;
    }
  }

  // 消除前變色
  public changeColor() {
    for (let y = 21; y >= 0; y--) {
      for (let x = 0; x <= 9; x++) {
        const clearY = '1,1,1,1,1,1,1,1,1,1';
        if (this.items[y].join(',') === clearY) {
          this.items[y] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
        }
      }
    }
  }

  // 變色與消除間的等待
  public sleep = async (time: number) => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(time * Math.random());
      }, time);
    });
  }

  // 消除變色區域
  public async clear() {
    this.changeColor();
    await this.sleep(100);
    for (let y = 21; y >= 0; y--) {
      const clearY = '10,10,10,10,10,10,10,10,10,10';
      if (this.items[y].join(',') === clearY) {
        this.items[y] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
      this.clearDown();
    }
  }

  // 消除後下降
  public clearDown() {
    for (let y = 20; y >= 0; y--) {
      const clearY = '0,0,0,0,0,0,0,0,0,0';
      if (this.items[y + 1].join(',') === clearY) {
        for (let x = 0; x <= 9; x++) {
          if (this.items[y][x] === 1) {
            this.items[y][x] = 0;
            this.items[y + 1][x] = 1;
          }
        }
      }

    }
  }

  // 判斷結束
  public gameOver() {
    if (this.items[2].indexOf(1) !== -1) {
      clearInterval(this.timeID);
      return true;
    }
    return false;
  }


  constructor() {
    this.putArray();
    this.keyEvent();
    this.playGame();
  }


  ngOnInit() {
  }

}
