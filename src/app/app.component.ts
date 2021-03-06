import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter;

  constructor(private store$: Store<any>) {
    this.counter = this.store$.select('counter');
  }

  public increment() {
    this.store$.dispatch({
      type: INCREMENT
    });
  }

  public decrement() {
    this.store$.dispatch({
      type: DECREMENT
    });
  }
}
