import { isDevMode } from '@angular/core';

export enum Environment {
  LOCAL_URL = 'http://127.0.0.1:5000/v1/',
  PRODUCTION_URL = 'https://kadibunnyart-api.herokuapp.com/v1/',
}

export class ENV {
  public static getEnvironment(): Environment {
    if (isDevMode()) {
      return Environment.LOCAL_URL;
    } else {
      return Environment.PRODUCTION_URL;
    }
  }
}

