webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\r\n  overflow: hidden;\r\n  height: 800px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\ngame {\r\n  width: 400px;\r\n  margin-right: 10px;\r\n}\r\n\r\nscore {\r\n  width: 100px;\r\n  height: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <game (score)=\"addScore($event)\"></game>\r\n  <score [score]=\"score\"></score>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.score = 0;
    }
    AppComponent.prototype.addScore = function (score) {
        this.score += score;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_game_component_game_component__ = __webpack_require__("../../../../../src/app/component/game.component/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_score_component_score_component__ = __webpack_require__("../../../../../src/app/component/score.component/score.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_game_component_game_component__["a" /* game */],
                __WEBPACK_IMPORTED_MODULE_5__component_score_component_score_component__["a" /* score */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/allBlock/iBlock.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBlock; });
// tslint:disable-next-line:class-name
var IBlock = (function () {
    function IBlock() {
        this.rotateId = 0;
    }
    IBlock.prototype.create = function (data) {
        data[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        data[1] = [0, 0, 0, -1, -1, -1, -1, 0, 0, 0];
    };
    // tslint:disable-next-line:member-ordering
    IBlock.prototype.rotate = function (data) {
        var items = data;
        switch (this.rotateId) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
    };
    return IBlock;
}());



/***/ }),

/***/ "../../../../../src/app/component/allBlock/square.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Square; });
var Square = (function () {
    function Square() {
        this.rotateId = 0;
    }
    Square.prototype.create = function (data) {
        data[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
        data[1] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
        // return [
        //   [0, 0, 0, 0, -1, -1, 0, 0, 0, 0],
        //   [0, 0, 0, 0, -1, -1, 0, 0, 0, 0]
        // ];
    };
    Square.prototype.rotate = function () {
    };
    return Square;
}());



/***/ }),

/***/ "../../../../../src/app/component/allBlock/tBlock.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBlock; });
// tslint:disable-next-line:class-name
var TBlock = (function () {
    function TBlock() {
        this.rotateId = 0;
    }
    TBlock.prototype.create = function (data) {
        data[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
        data[1] = [0, 0, 0, 0, 0, -1, 0, 0, 0, 0];
    };
    // tslint:disable-next-line:member-ordering
    TBlock.prototype.rotate = function (data) {
        var items = data;
        switch (this.rotateId) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
                        if (items[y][x] === -1 && items[y][x + 1] === -1 && items[y][x + 2] === -1) {
                            items[y - 1][x + 1] = -1;
                            items[y][x + 2] = 0;
                            this.rotateId = 1;
                        }
                    }
                }
                break;
            case 1:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
                        if (items[y][x] === -1 && items[y][x + 1] === -1 && items[y + 1][x + 1] === -1 && items[y][x + 2] === 0) {
                            items[y + 1][x + 1] = 0;
                            items[y][x + 2] = -1;
                            this.rotateId = 2;
                        }
                    }
                }
                break;
            case 2:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
                        if (items[y][x] === -1 && items[y - 1][x + 1] === -1 && items[y][x + 1] === -1 && items[y][x + 2] === -1) {
                            items[y][x] = 0;
                            items[y + 1][x + 1] = -1;
                            this.rotateId = 3;
                        }
                    }
                }
                break;
            case 3:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
                        // tslint:disable-next-line:max-line-length
                        if (items[y + 1][x] === 0 && items[y][x + 1] === -1 && items[y + 1][x + 1] === -1 && items[y + 2][x + 1] === -1 && items[y + 1][x + 2] === -1) {
                            items[y + 1][x] = -1;
                            items[y][x + 1] = 0;
                            this.rotateId = 0;
                        }
                    }
                }
                break;
        }
    };
    return TBlock;
}());



/***/ }),

/***/ "../../../../../src/app/component/game.component/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n  background: #ddd;\r\n}\r\n\r\n.flex-row {\r\n  height: 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  top: -80px;\r\n}\r\n\r\n.f1 {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  background: #ddd;\r\n}\r\n\r\n.fw {\r\n  width: 100%;\r\n}\r\n\r\n.dark {\r\n  background: #ccc;\r\n  border: 0.2px solid #fff;\r\n}\r\n\r\n.light {\r\n  background: #eee;\r\n}\r\n\r\n.clear {\r\n  background: #fff;\r\n  border: 0.2px solid #666;\r\n}\r\n\r\n.gameover::after {\r\n  content: \"GAME OVER\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  font-size: 3em;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-top: 40%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/game.component/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" [ngClass]=\"{'gameover':gameOver()}\">\r\n  <div *ngFor=\"let item of items\" class=\"flex-row fw\">\r\n    <div *ngFor=\"let subItem of item\" class=\"f1\" [ngClass]=\"{'dark':subItem,'light':!subItem,'clear':subItem==10}\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/game.component/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allBlock_iBlock_class__ = __webpack_require__("../../../../../src/app/component/allBlock/iBlock.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allBlock_tBlock_class__ = __webpack_require__("../../../../../src/app/component/allBlock/tBlock.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allBlock_square_class__ = __webpack_require__("../../../../../src/app/component/allBlock/square.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var game = (function () {
    function game() {
        var _this = this;
        this.items = [];
        this.drop = 0;
        this.timeID = null;
        this.rotate = 0;
        // tslint:disable-next-line:member-ordering
        this.blocks = [__WEBPACK_IMPORTED_MODULE_3__allBlock_square_class__["a" /* Square */], __WEBPACK_IMPORTED_MODULE_2__allBlock_tBlock_class__["a" /* TBlock */], __WEBPACK_IMPORTED_MODULE_1__allBlock_iBlock_class__["a" /* IBlock */]];
        // 變色與消除間的等待
        this.sleep = function (time) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(time * Math.random());
                        }, time);
                    })];
            });
        }); };
        //消除後加分
        this.score = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.putArray();
        this.keyEvent();
        this.playGame();
    }
    // 遊戲背景生成
    game.prototype.putArray = function () {
        for (var y = 0; y < 22; y++) {
            var temp = [];
            for (var x = 0; x < 10; x++) {
                temp.push(0);
            }
            this.items.push(temp);
        }
    };
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
    game.prototype.lBlock = function () {
        this.items[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
        this.items[1] = [0, 0, 0, 0, -1, 0, 0, 0, 0, 0];
    };
    game.prototype.jBlock = function () {
        this.items[0] = [0, 0, 0, 0, -1, -1, -1, 0, 0, 0];
        this.items[1] = [0, 0, 0, 0, 0, 0, -1, 0, 0, 0];
    };
    game.prototype.zBlock = function () {
        this.items[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
        this.items[1] = [0, 0, 0, 0, 0, -1, -1, 0, 0, 0];
    };
    game.prototype.sBlock = function () {
        this.items[0] = [0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
        this.items[1] = [0, 0, 0, -1, -1, 0, 0, 0, 0, 0];
    };
    game.prototype.randomBlock = function () {
        this.blockNumber = Math.round(Math.random() * 2);
        this.block = new this.blocks[this.blockNumber]();
        var blockData = this.block.create(this.items);
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
    };
    // 開始遊戲
    game.prototype.playGame = function () {
        var _this = this;
        this.randomBlock();
        this.timeID = setInterval(function () {
            if (_this.downStop()) {
                _this.down();
            }
            else {
                _this.absData();
                _this.rotate = 0;
                _this.clear();
                _this.gameOver();
                _this.randomBlock();
            }
        }, 500);
    };
    // 下降
    game.prototype.down = function () {
        for (var y = 20; y >= 0; y--) {
            while (1) {
                var block = this.items[y].indexOf(-1);
                // tslint:disable-next-line:curly
                if (block === -1)
                    break;
                if (this.items[y + 1][block] === 0) {
                    this.items[y][block] = 0;
                    this.items[y + 1][block] = -1;
                }
                else {
                    break;
                }
            }
        }
    };
    // 停止時負轉正
    game.prototype.absData = function () {
        for (var y = 0; y < 22; y++) {
            for (var x = 0; x < 10; x++) {
                this.items[y][x] = Math.abs(this.items[y][x]);
            }
        }
    };
    // 鍵盤事件
    game.prototype.keyEvent = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            if (_this.downStop()) {
                _this.direction(event);
            }
        });
    };
    // 鍵盤方向
    game.prototype.direction = function (event) {
        switch (event.code) {
            case 'ArrowRight':
                if (this.rightStop()) {
                    for (var y = 20; y >= 0; y--) {
                        for (var x = 9; x >= 0; x--) {
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
                    for (var y = 20; y >= 0; y--) {
                        for (var x = 0; x <= 9; x++) {
                            if (this.items[y][x] === -1 && this.items[y][x - 1] === 0) {
                                this.items[y][x] = 0;
                                this.items[y][x - 1] = -1;
                            }
                        }
                    }
                }
                break;
            case 'ArrowDown':
                for (var y = 20; y >= 0; y--) {
                    for (var x = 0; x <= 9; x++) {
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
        }
    };
    // 判斷整塊移動
    game.prototype.downStop = function () {
        for (var y = 21; y >= 0; y--) {
            for (var x = 0; x < 10; x++) {
                if (this.items[y][x] === -1 && (y + 1 > 21 || this.items[y + 1][x] > 0)) {
                    return false;
                }
            }
        }
        return true;
    };
    game.prototype.rightStop = function () {
        for (var y = 21; y >= 0; y--) {
            for (var x = 9; x >= 0; x--) {
                if (this.items[y][x] === -1 && (x + 1 > 9 || this.items[y][x + 1] > 0)) {
                    return false;
                }
            }
        }
        return true;
    };
    game.prototype.leftStop = function () {
        for (var y = 21; y >= 0; y--) {
            for (var x = 0; x <= 9; x++) {
                if (this.items[y][x] === -1 && (x - 1 < 0 || this.items[y][x - 1] > 0)) {
                    return false;
                }
            }
        }
        return true;
    };
    game.prototype.lBlockRotate = function () {
        switch (this.rotate) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
    };
    // J型旋轉
    game.prototype.jBlockRotate = function () {
        switch (this.rotate) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
    };
    // Z型旋轉
    game.prototype.zBlockRotate = function () {
        switch (this.rotate) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
    };
    // S型旋轉
    game.prototype.sBlockRotate = function () {
        switch (this.rotate) {
            case 0:
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
                for (var y = 0; y <= 20; y++) {
                    for (var x = 0; x <= 9; x++) {
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
    };
    // 消除前變色
    game.prototype.changeColor = function () {
        for (var y = 21; y >= 0; y--) {
            for (var x = 0; x <= 9; x++) {
                var clearY = '1,1,1,1,1,1,1,1,1,1';
                if (this.items[y].join(',') === clearY) {
                    this.items[y] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
                }
            }
        }
    };
    // 消除變色區域
    game.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var y, clearY;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.changeColor();
                        return [4 /*yield*/, this.sleep(100)];
                    case 1:
                        _a.sent();
                        for (y = 21; y >= 0; y--) {
                            clearY = '10,10,10,10,10,10,10,10,10,10';
                            if (this.items[y].join(',') === clearY) {
                                this.items[y] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                this.score.next(50);
                            }
                            this.clearDown();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 消除後下降
    game.prototype.clearDown = function () {
        for (var y = 20; y >= 0; y--) {
            var clearY = '0,0,0,0,0,0,0,0,0,0';
            if (this.items[y + 1].join(',') === clearY) {
                for (var x = 0; x <= 9; x++) {
                    if (this.items[y][x] === 1) {
                        this.items[y][x] = 0;
                        this.items[y + 1][x] = 1;
                    }
                }
            }
        }
    };
    // 判斷結束
    game.prototype.gameOver = function () {
        if (this.items[2].indexOf(1) !== -1) {
            clearInterval(this.timeID);
            return true;
        }
        return false;
    };
    game.prototype.ngOnInit = function () {
        this.score.subscribe(function (e) { console.log(e); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], game.prototype, "score", void 0);
    game = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'game',
            template: __webpack_require__("../../../../../src/app/component/game.component/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/game.component/game.component.css")]
        })
        // tslint:disable-next-line:class-name
        ,
        __metadata("design:paramtypes", [])
    ], game);
    return game;
}());



/***/ }),

/***/ "../../../../../src/app/component/score.component/score.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n  font-size: 2em;\r\n  background: #ddd;\r\n  width: 100px;\r\n  height: 100px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/score.component/score.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">{{score}}</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/score.component/score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return score; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var score = (function () {
    function score() {
        this.score = 0;
    }
    score.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], score.prototype, "score", void 0);
    score = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'score',
            template: __webpack_require__("../../../../../src/app/component/score.component/score.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/score.component/score.component.css")]
        })
        // tslint:disable-next-line:class-name
        ,
        __metadata("design:paramtypes", [])
    ], score);
    return score;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map