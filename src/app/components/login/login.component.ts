import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: number;

  constructor(private _login: LoginService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this._login.logID = this.login;
    this.router.navigate(['/perfil']);
  }
}
