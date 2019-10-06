import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/reducers/reducers';
import { Observable, Subscription } from 'rxjs';
import { User, selectUserById } from '../../../store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() userId: string;
  user$: Observable<User>;
  user: User = null;
  userSub: Subscription;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(selectUserById, this.userId));
  }

}
