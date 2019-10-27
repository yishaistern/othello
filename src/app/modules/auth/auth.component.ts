import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers/reducers';
import { areBothLooged } from '../../store/reducers/auth.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  navSub: Subscription;
  public users = [
    {
      id: 'user1',
    }, {
      id: 'user2',
    }
  ];
  constructor(
    private store: Store<AppState>,
    private route: Router,
  ) { }

  ngOnInit() {
    this.navSub = this.store.pipe(select(areBothLooged)).subscribe((data: boolean) => {
      if (data) {
        const navroute = ['game'];
        this.route.navigate(navroute);
      }
    });
  }

}
