import { Component, OnInit } from '@angular/core';
import {Account} from "../account";
import {HttpClient} from "@angular/common/http";
import {Environment} from "../environment";
import {Keys} from "../keys";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  account: Account = {id: 0, email: '', password: '', username: '', admin: false};
  confirmPassword: String = '';
  errors: Array<string> = [];

  ngOnInit(): void {

  }

  // EVENT: When user clicks the 'create' button.
  create(): void {
    // Check if the user entered in all fields.
    if (this.account.email || this.account.password || this.account.username) {
      // Check if the user entered in at least 8 characters for password.
      if (this.account.password.length >= 8) {
        // Check if the user has the same password and confirmed password.
        if (this.account.password === this.confirmPassword) {
          // Call the API
          this.httpClient.post<Account>(Environment.PRODUCTION_URL + 'account/create', this.account).subscribe(result => {
            // Save the information to the localStorage to start a "session".
            localStorage.setItem(Keys.ACCOUNT_ID, String(result.id));
            localStorage.setItem(Keys.ACCOUNT_USERNAME, result.username);
            localStorage.setItem(Keys.ACCOUNT_EMAIL, result.email);
            // Redirect the user to the account page.
            window.location.href='account';
          });
        } else {
          this.errors.push('Your password and confirmation password do not match!');
        }
      } else {
        this.errors.push('Your password must be 8 or more fields!');
      }
    } else {
      this.errors.push('Please enter in all fields!');
    }
  }

}
