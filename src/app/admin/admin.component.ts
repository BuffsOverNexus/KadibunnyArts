import { Component, OnInit } from '@angular/core';
import {Keys} from "../keys";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  isAdmin: boolean = localStorage.getItem(Keys.ACCOUNT_ADMIN) == "true" ?? false;
  username: string = (localStorage.getItem(Keys.ACCOUNT_USERNAME) ?? "");

  ngOnInit(): void {

  }

  setTab(tab: number) {
    switch(tab) {
      case Tab.COMMISSION:

        break;
    }
  }

}

export enum Tab {
  COMMISSION = 0,

}


