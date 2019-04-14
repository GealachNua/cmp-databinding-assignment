import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    evens = [];
    odds = [];

    buildOddsEvens(myCounter: {counterValue: number}) {
        // console.log(myCounter.counterValue);
        if (myCounter.counterValue%2 === 0) {
            this.evens.push(myCounter.counterValue);
        } else {
            this.odds.push(myCounter.counterValue);
        };
        // console.log(this.evens);
    }

}
