import { Component, OnInit } from '@angular/core';
import {Keys} from "../keys";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  isAdmin: boolean = false;
  username: string = localStorage.getItem(Keys.ACCOUNT_USERNAME) ?? "My Account";

  ngOnInit(): void {
    // Add the "Admin Panel" button if they're admin.
    let adminKey = localStorage.getItem(Keys.ACCOUNT_ADMIN);
    if (adminKey && adminKey.toLowerCase() == "true") {
      this.isAdmin = true;
    }
  }

}
