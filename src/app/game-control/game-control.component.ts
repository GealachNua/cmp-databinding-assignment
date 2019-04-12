import { Component, OnInit } from '@angular/core';
import { ParseErrorLevel } from '@angular/compiler';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    inter;
    odds = [];
    evens = [];

  constructor() { }

  ngOnInit() {
  }


  onClickStart() {
    //   Following line prevents multiple setIntervals being started that cannot be stopped.
      this.onClickStop();
      let counter = 0;
    //   Used arrow function so the scope of 'this' get hoisted to the next ParseErrorLevel. Now Odds and Evens are visitSiblingRenderNodes. Otherwhise this.odds and this.evens are undefined.
      this.inter = setInterval(() => {
        counter += 1;
        if (counter % 2 === 0 ) {
            this.evens.push(counter);
        } else {
            this.odds.push(counter)
        }
        console.log(counter);
      }, 1000)
    // console.log(this.odds);
  }

  onClickStop() {
    clearInterval(this.inter);
    console.log("Odds are: " + this.odds);
    console.log("EVens are: " + this.evens);
  }

}
