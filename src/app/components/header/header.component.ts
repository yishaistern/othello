import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers/reducers';
import { Observable, Subscription } from 'rxjs';
import { selectPathUrl } from '../../store/reducers/route-serializer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path$: Observable<string>;
  path: string = '';
  pathsub: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.path$ = this.store.pipe(select(selectPathUrl));
    this.pathsub = this.store.pipe(select(selectPathUrl)).subscribe(data => {
      this.path = data;
    });
  }

}
