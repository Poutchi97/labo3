import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IUser } from 'src/app/models/iuser';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public user!: string;
  public key: string = 'auth';
  public ConnexionBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.userLogged());
  private jwtHelper = new JwtHelperService();
  constructor() { }

  public addUser(token: any) {
    localStorage.setItem(this.key, JSON.stringify(token));
    this.ConnexionBehavior.next(this.userLogged());
  }

  public deleteUser() {
    localStorage.removeItem(this.key);
    this.ConnexionBehavior.next(this.userLogged());
  }

  public getUser() {
    let user: string | null = localStorage.getItem(this.key);
    if (user === null) throw new Error("No user logged");
    return JSON.parse(user);
  }

  public getUserCount(): number {
    return localStorage.length;
  }

  public userLogged(): boolean {
    let token = localStorage.getItem(this.key);
    if (token === null) {
      return false;
    }
    return true;
    // return !this.jwtHelper.isTokenExpired(token) || !token;
  }
}
