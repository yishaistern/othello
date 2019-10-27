import { Component, OnInit } from '@angular/core';
import { selectUserById, User } from 'src/app/store/reducers/auth.reducer';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.scss']
})
export class PickColorComponent implements OnInit {
  user1$: Observable<User>;
  user2$: Observable<User>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.user1$ = this.store.pipe(select(selectUserById, 'user1'));
    this.user2$ = this.store.pipe(select(selectUserById, 'user2'));
  }

}
