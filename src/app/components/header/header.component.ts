import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers/reducers';
import { Observable } from 'rxjs';
import { selectPathUrl } from '../../store/reducers/route-serializer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.path$ = this.store.pipe(select(selectPathUrl));
  }

}
