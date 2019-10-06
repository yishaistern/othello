import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public users = [
    {
      id: 'user1',
    }, {
      id: 'user2',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
