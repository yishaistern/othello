import { Component, OnInit } from '@angular/core';
import { UserLoginPayload, areBothLooged, selectAllUsers, UsersState } from '../../../store/reducers/auth.reducer';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/reducers/reducers';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { sginSuccess } from '../../../store/auth.actions';
import { Subscription, Observable } from 'rxjs';
import { selectRouteParam } from '../../../store/reducers/route-serializer';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrls: ['./sgin-up.component.scss']
})
export class SginUpComponent implements OnInit {
  paramsSub: Subscription;
  navSub: Subscription;
  userId: string = 'user2';
  tt: Observable<boolean>;
  afterSin = false;
  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private route: Router,
    private toastr: ToastrService) { }
  userInput: UserLoginPayload = {
    password: '',
    userName: ''
  };

  ngOnInit() {
    this.paramsSub = this.store.pipe(select(selectRouteParam, 'userId')).subscribe((data: string) => {
      this.userId = data;
    });
    this.tt = this.store.pipe(select(areBothLooged));
    this.navSub = this.tt.subscribe((data: boolean) => {
      if (this.afterSin) {
        const navroute = (data) ? ['game'] : ['auth'];
        this.route.navigate(navroute);
      }
    });

  }
  sign() {
    this.http.post('http://localhost:4005/singUp', this.userInput).subscribe((data: any) => {
      if (data.status && data.status.code === 0) {
        this.afterSin = true;
        this.toastr.success(`${this.userInput.userName} logged`);

        this.store.dispatch(sginSuccess({ user: { userName: this.userInput.userName, userid: this.userId }}));
      } else if (data.status && data.status.code === -1) {
        this.toastr.error('User exsites');
      }
    });
  }

}
