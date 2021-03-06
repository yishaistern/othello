import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/reducers/reducers';
import { Observable, Subscription } from 'rxjs';
import { User, selectUserById, UserLoginPayload } from '../../../store/reducers/auth.reducer';
import { HttpClient } from '@angular/common/http';
import { loginSuccess } from 'src/app/store/auth.actions';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private route: Router,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(selectUserById, this.userId));
  }

  login() {
    this.http.post('http://localhost:4005/login', this.userInput).subscribe((data: any) => {
      console.log(data);
      if (data.status && data.status.code === 0) {
        this.toastr.success(`${this.userInput.userName} logged`);
        this.store.dispatch(loginSuccess({ user: { userName: this.userInput.userName, userid: this.userId }}));
      } else if (data.status && data.status.code === -1) {
        this.toastr.error('Rong name or password');
      }
    });
  }
  sign() {
    this.route.navigate(['/auth/signUp', this.userId]);
  }
}
