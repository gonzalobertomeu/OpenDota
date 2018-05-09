import { Component, OnInit } from '@angular/core';
import { ApiService, Profile, WinLoss, Match, Heroe } from '../../services/api.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  profile: Profile;
  winloss: WinLoss;
  recentMatches: Match[];
  cachedHeroes: Heroe[];

  constructor(private _api: ApiService, private _login: LoginService, private router: Router) { }

  ngOnInit() {
    console.log(this._login.logID);
    if (!this._login.logID) {
      this.router.navigate(['']);
    } else {
      this.getProfile();
      this.getWinLoss();
      this.getRecentMatches();
    }
  }

  getProfile() {
    this._api.getPlayer(this._login.logID).subscribe(resultado => {
      this.profile = resultado;
    });
  }

  getWinLoss() {
    this._api.getWinLoss(this._login.logID).subscribe(resultado => {
      this.winloss = resultado;
    });
  }

  getRecentMatches() {
    this._api.getRecentMatches(this._login.logID).subscribe( resultado => {
      this.recentMatches = resultado;
      console.log(this.recentMatches);
    });
  }

  // cachearHeroes() {
  //   this._api.getHeroes().subscribe( resultado => {
  //     this.cachedHeroes = resultado;
  //     console.log(this.cachedHeroes);
  //     console.log(this.cachedHeroes.length);
  //   });
  // }

  cachearHeroes() {
    return new Promise((resolve, reject) => {
      if (this.cachedHeroes.length > 100) {
        resolve();
      } else {
        this._api.getHeroes().subscribe( resultado => {
          this.cachedHeroes = resultado;
          resolve();
        });
      }
    });
  }
  getHero(hero: number) {
    const heroes = this.cachedHeroes;
    this.cachearHeroes().then(function() {
      return heroes.find(function(h) {
        return h.id === hero;
      });
    });
  }


}
