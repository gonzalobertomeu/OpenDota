import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  logID: number;

  constructor() { }

  logout() {
    this.logID = undefined;
  }
}
