import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
// tslint:disable-next-line:class-name
export class score implements OnInit {

  constructor() { }

  @Input() score: number = 0;

  ngOnInit() {
  }

}
