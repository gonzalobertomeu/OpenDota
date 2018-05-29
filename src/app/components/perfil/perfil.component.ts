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


  constructor(public _api: ApiService, private _login: LoginService, private router: Router) { }

  ngOnInit() {
    console.log(this._login.logID);
    if (!this._login.logID) {
      this.router.navigate(['']);
    } else {
      this.getProfile();
      this.getRecentMatches();
      this.getWinLoss();
    }
  }

  getProfile() {
    this._api.getPlayer(this._login.logID).subscribe(resultado => {
      this.profile = resultado;
      console.log('Cargado el perfil');
    });
  }

  getWinLoss() {
    this._api.getWinLoss(this._login.logID).subscribe(resultado => {
      this.winloss = resultado;
      console.log('Cargado el WinLoss')
    });
  }

  getRecentMatches() {
    this._api.getRecentMatches(this._login.logID).subscribe( resultado => {
      this.addHeroes(this._api, resultado);
      console.log('Cargados las partidas recientes');
    });
  }


  addHeroes(api: ApiService, partidas: Match[]) {
    api.getHeroes().subscribe( resultado => {
      partidas.forEach(function(partida) {
        partida.hero = resultado.find(function(h) {
          return h.id === partida.hero_id;
        });
      });
      this.recentMatches = partidas;
      console.log('Cargados los heroes');

    });
  }

}
