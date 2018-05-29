import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { HttpHeaders } from '@angular/common/http';*/
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginService } from '../components/login/login.service';
import { MatCheckbox } from '@angular/material';






@Injectable()
export class ApiService {

  private baseUrl = 'https://api.opendota.com/api/';


  constructor(private http: HttpClient, private _login: LoginService) {
    console.log('Se cargo el servicio');
  }

  getPlayer(id: number): Observable<Profile> {
    return this.http.get(this.baseUrl + 'players/' + id)
    .map((resultado: any) => {
      const devolver = {
        mmr_estimado : resultado.mmr_estimate.estimate,
        id_cuenta : resultado.profile.account_id,
        nombre : resultado.profile.personaname,
        avatarfull : resultado.profile.avatarfull,
        steamid : resultado.profile.steamid,
        locacion : resultado.profile.loccountrycode
      };

      if (devolver.id_cuenta === this._login.logID) {
        return devolver;
      } else {
        return null;
      }
    });
  }

  getWinLoss(player: number): Observable<WinLoss> {
    return this.http.get(this.baseUrl + `players/${player}/wl`)
    .map((resultado: any) => {
      const devolucion = {
        win: resultado.win,
        lose: resultado.lose
      };
        return devolucion;
    });
  }

  getRecentMatches(player: number): Observable<Match[]> {
    return this.http.get(this.baseUrl + `players/${player}/recentMatches`).map((resultado: Match[]) => {
      resultado.forEach(match => {
        match.win = (match.radiant_win && match.player_slot < 100) || (!match.radiant_win && match.player_slot > 100);
      });
      return resultado as Match[];
    });
  }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get(this.baseUrl + 'heroes' ).map( (resultado: Heroe[]) => {
      const url = 'https://api.opendota.com/apps/dota2/images/heroes/';
      resultado.forEach(function(heroe: Heroe) {
        heroe.avatar_url = url.concat(heroe.name.substr(14).concat('_sb.png'));
      });
      return resultado as Heroe[];
    });
  }
}

export interface Profile {
  mmr_estimado: Object;
  id_cuenta: String;
  nombre: String;
  avatarfull: String;
  steamid: String;
  locacion: String;
}
export interface WinLoss {
  win: number;
  lose: number;
}

export interface Match {
    match_id: number;
    player_slot: number;
    radiant_win: boolean;
    duration: number;
    game_mode: number;
    lobby_type: number;
    hero_id: number;
    start_time: number;
    version: number;
    kills: number;
    deaths: number;
    assists: number;
    skill: number;
    lane: number;
    lane_role: number;
    is_roaming: boolean;
    cluster: number;
    leaver_status: number;
    party_size: number;
    hero: Heroe;
    win: boolean;
}

export interface Heroe {
  id: number;
  name: String;
  avatar_url: String;
  localized_name: String;
  primary_attr: String;
  attack_type: String;
  roles: any[];
}
