import { Component, OnInit } from '@angular/core';
import {Keys} from "../keys";
import {Emote} from "../emote";
import {HttpClient} from "@angular/common/http";
import {OptionKey, Option} from "../option";
import {Environment} from "../environment";

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  emotes: Array<Emote> = [];
  errors: Array<Error> = [];
  maximumError = new Error("You may only add up to 15 emotes in one order.");
  minimumError = new Error('You must have at least one emote in an order.');
  terms: boolean = false;
  price: number = 20.00;
  usd: boolean = false;
  hasAccount: boolean = false;
  formEnabled: boolean = true;
  commissionsDisabledMessage: string = "New commission requests are currently unavailable. Please try again later.";

  ngOnInit(): void {
    this.addEmote();
    // Determine if the user has an account
    this.hasAccount = localStorage.getItem(Keys.ACCOUNT_ID) != null;

    // Retrieve the enabled commissions option and see if the page is available.
    this.httpClient.post<Option>(Environment.PRODUCTION_URL + 'option/by-key', { key: OptionKey.COMMISSION_STATUS }).subscribe(result => {
      this.formEnabled = JSON.parse(result.value);
    });
    this.httpClient.post<Option>(Environment.PRODUCTION_URL + 'option/by-key', { key: OptionKey.COMMISSION_DISABLED_MESSAGE }).subscribe(result => {
      this.commissionsDisabledMessage = result.value;
    });
  }

  addEmote(): void {
    if (this.emotes.length < 15) {
      this.emotes.push({ id: 0, reference: '', description: '' });
    } else {
      if ( !this.errors.includes(this.maximumError) ) {
        this.errors.push(this.maximumError);
      }
    }

  }

  removeEmote(i: number): void {
    if (this.emotes.length > 1) {
      this.emotes.splice(i, 1);
    } else {
      if ( !this.errors.includes(this.minimumError) ) {
        this.errors.push(this.minimumError);
      }
    }
  }

  updateCurrency(): void {
    if (this.usd) {
      this.price = 17;
    } else {
      this.price = 20;
    }
  }

  finish(): void {
    if (this.terms) {

    } else {
      this.errors.push(new Error('You must agree to the Terms of Service before you may continue.'));
    }
  }


}

class Error {
  message: string;
  closed: boolean = false;

  constructor(message: string) {
    this.message = message;
  }
}
