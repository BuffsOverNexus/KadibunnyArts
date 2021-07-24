import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Option, OptionType} from "../option";
import {ENV, Environment} from "../environment";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  options: Array<Option> = [];

  ngOnInit(): void {
    // Retrieve the server options for commission status
    this.httpClient.get<Array<Option>>(ENV.getEnvironment()  + 'options').subscribe(result => {
      this.options = result.map(option => this.convert(option));
    });
  }

  convert(option: Option): Option {
    console.log(option);
    if (option.type == OptionType.toggle) {
      option.value = JSON.parse(option.value.toLowerCase());
    }
    return option;
  }

  save(): void {
    console.log(this.options);

    this.httpClient.post<Array<Option>>(ENV.getEnvironment()  + 'option/save/all', { options: this.options }).subscribe(result => {
      this.options = result.map(option => this.convert(option));
    });

  }
}
