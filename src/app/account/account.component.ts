import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  account: Account = { id: 0, email: "", password: "", username: "" };

  ngOnInit(): void {
  }

}
