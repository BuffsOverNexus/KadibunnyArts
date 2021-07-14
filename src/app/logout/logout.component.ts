import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Clear out the localStorage.
    localStorage.clear();

    // Redirect the user to the login page.
    window.location.href = 'account/login';
  }

}
