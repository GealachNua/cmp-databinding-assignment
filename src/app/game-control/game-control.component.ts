import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParseErrorLevel } from '@angular/compiler';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    inter;
    counter: number;
    @Output() myCounter = new EventEmitter<{counterValue: number}>();

  constructor() { }

  ngOnInit() {
  }


  onClickStart() {
    //   Following line prevents multiple setIntervals being started that cannot be stopped.
      this.onClickStop();
      this.counter = 0;
    //   Used arrow function so the scope of 'this' get hoisted to the next ParseErrorLevel. Now Odds and Evens are visitSiblingRenderNodes. Otherwhise this.odds and this.evens are undefined.
      this.inter = setInterval(() => {
        this.counter += 1;
        this.myCounter.emit({
            counterValue: this.counter
        });
      }, 1000);
    // console.log(this.odds);
  }

  onClickStop() {
    clearInterval(this.inter);
  }

}
