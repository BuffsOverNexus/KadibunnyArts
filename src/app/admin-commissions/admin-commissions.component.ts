import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "../environment";
import {Option, OptionKey} from "../option";

@Component({
  selector: 'app-admin-commissions',
  templateUrl: './admin-commissions.component.html',
  styleUrls: ['./admin-commissions.component.css']
})
export class AdminCommissionsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  save(): void {
  }

}
