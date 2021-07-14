import { Component, OnInit } from '@angular/core';
import {Account} from "../account";
import {Environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Keys} from "../keys";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  account: Account = { id: 0, email: "", password: "", username: "", admin: false };
  error: String = "";

  ngOnInit(): void {
    // Check if the user somehow is logged in.
    if (localStorage.getItem(Keys.ACCOUNT_ID) != undefined) {
      window.location.href = 'account';
    }
  }

  // When the user clicks Login
  login(): void {
    if (this.account.username && this.account.password) {
      // Make a request to see if the login is correct.
      this.httpClient.post<Account>(Environment.PRODUCTION_URL + 'account/by-login', this.account).subscribe(result => {
        if (result == undefined) {
          this.error = "The username/password combination are incorrect. Try again.";
        } else {
          // Save the account information into localStorage
          localStorage.setItem(Keys.ACCOUNT_ID, result.id.toString());
          localStorage.setItem(Keys.ACCOUNT_EMAIL, result.email);
          localStorage.setItem(Keys.ACCOUNT_USERNAME, result.username);
          localStorage.setItem(Keys.ACCOUNT_ADMIN, result.admin.toString());
          // Redirect user to account page.
          window.location.href = 'account';
        }
      });
    }
  }

}
