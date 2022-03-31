import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public idUserLocalstorage!: string;
  public ConnexionBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.userLogged(this.idUserLocalstorage));
  constructor() { }

  public createUser(user: IUser, key: string) {
    localStorage.setItem(key, JSON.stringify(user));
    this.ConnexionBehavior.next(this.userLogged(key));
  }

  public getUser(key: string) {
    let user: string | null = localStorage.getItem(key);
    if (user === null) throw new Error("No user saved");

    return JSON.parse(user);
  }

  public getUserCount(): number {
    return localStorage.length;
  }

  public userLogged(key: string) {
    let user: string | null = localStorage.getItem(key);
    if (user === null) {
      return false;

    }
    return true;
  }
}
