import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { increase, decrease, clear, countSelector, updatedAtSelector } from './reducers/counter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // counter = 0;
  // updatedAt?: number;
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {}

  increase(): void {
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.store.dispatch(decrease());
  }
  clear(): void {
    this.store.dispatch(clear());
  }
}
