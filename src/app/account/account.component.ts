import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import {Keys} from "../keys";
import {HttpClient} from "@angular/common/http";
import {ENV, Environment} from "../environment";
import {OptionKey, Option} from "../option";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  successfullyUpdatedEmail: boolean = false;
  successfullyResetPassword: boolean = false;
  isResettingPassword: boolean = false;
  account: Account = { id: 0, email: "", password: "", username: "", admin: false };
  password: string = "";
  confirmPassword: string = "";
  canChangeEmail: boolean = true;

  ngOnInit(): void {
    // Check if the user is logged in.
    if (localStorage.getItem(Keys.ACCOUNT_ID) == undefined) {
      window.location.href='account/login';
    } else {
      this.account.email = localStorage.getItem(Keys.ACCOUNT_EMAIL) ?? "";
      this.account.username = localStorage.getItem(Keys.ACCOUNT_USERNAME) ?? "";
      this.account.id = parseInt(localStorage.getItem(Keys.ACCOUNT_ID) ?? "0");
    }

    // Ensure the user can edit the page.
    this.httpClient.post<Option>(ENV.getEnvironment() + 'option/by-key', { key: OptionKey.ACCOUNT_EDIT_EMAIL }).subscribe(result => {
      this.canChangeEmail = JSON.parse(result.value.toLowerCase());
    });
  }

  updateEmail(): void {
    this.successfullyUpdatedEmail = false;
    if (this.account.email) {
      // Check for some basic criteria
      if (this.account.email.includes("@") && this.account.email.includes(".")) {
        this.httpClient.post<Boolean>(ENV.getEnvironment() + 'account/update-email', this.account).subscribe(result => {
          if (result) {
            this.successfullyUpdatedEmail = true;
            // Session does not update with new email.
            localStorage.setItem(Keys.ACCOUNT_EMAIL, this.account.email);
          }
        });
      }
    }
  }

  resetPassword(): void {
    this.successfullyResetPassword = false;
    if (!this.isResettingPassword)
      this.isResettingPassword = true;
    else {
      // Submit the request.
      if (this.password && this.confirmPassword) {
        // Ensure they are the same.
        if (this.password == this.confirmPassword) {
          // Ensure the password is at least 8 characters
          if (this.password.length >= 8) {
            // Update with the password in the account.
            this.account.password = this.password;
            this.httpClient.post<Boolean>(Environment.PRODUCTION_URL + 'account/change-password', this.account).subscribe(result => {
              // Should work, then we close.
              if (result) {
                this.isResettingPassword = false;
                this.password = this.confirmPassword = "";
                this.successfullyResetPassword = true;
              }
            });
          }
        }
      }
    }
  }

}
