import { Component } from '@angular/core';
import { LoginService } from './components/login/login.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _login: LoginService) {}

  logout() {
    this._login.logout();
  }
}
