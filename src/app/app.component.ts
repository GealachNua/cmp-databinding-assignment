import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    evens: number[] = [];
    odds: number[] = [];

    buildOddsEvens(myCounter: number) {
        // console.log(myCounter.counterValue);
        if (myCounter%2 === 0) {
            this.evens.push(myCounter);
        } else {
            this.odds.push(myCounter);
        };
        // console.log(this.evens);
    }

}
