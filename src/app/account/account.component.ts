import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import {Keys} from "../keys";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  account: Account = { id: 0, email: "", password: "", username: "", admin: false };

  ngOnInit(): void {
    // Check if the user is logged in.
    if (localStorage.getItem(Keys.ACCOUNT_ID) == undefined) {
      window.location.href='account/login';
    }
  }

}
