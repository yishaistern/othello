import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/reducers/reducers';
import { Observable, Subscription } from 'rxjs';
import { User, selectUserById, UserLoginPayload } from '../../../store/reducers/auth.reducer';
import { HttpClient } from '@angular/common/http';
import { loginSuccess } from 'src/app/store/auth.actions';

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
  userInput: UserLoginPayload = {
    password: '',
    userName: ''
  };
  constructor(private store: Store<AppState>,  private http: HttpClient) {

  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(selectUserById, this.userId));
  }

  login() {
    this.http.post('http://localhost:4005/login', this.userInput).subscribe((data: any) => {
      console.log(data);
      if (data.status && data.status.code === 0) {
        this.store.dispatch(loginSuccess({ user: { userName: this.userInput.userName, userid: this.userId }}));
      }
    });
  }

}
