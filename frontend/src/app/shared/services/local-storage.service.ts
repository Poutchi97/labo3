import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public user!: string;
  public key: string = "1";
  public ConnexionBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.userLogged());
  constructor() { }

  public addUser(user: IUser) {
    localStorage.setItem(this.key, JSON.stringify(user));
    this.ConnexionBehavior.next(this.userLogged());
  }

  public deleteUser(key: string) {
    localStorage.removeItem(key);
    this.ConnexionBehavior.next(this.userLogged());
  }

  public getUser(key: string) {
    let user: string | null = localStorage.getItem(key);
    if (user === null) throw new Error("No user saved");
    return JSON.parse(user);
  }

  public getUserCount(): number {
    return localStorage.length;
  }

  public userLogged() {
    let user: string | null = localStorage.getItem(this.key);
    if (user === null) {
      return false;
    }
    return true;
  }
}
