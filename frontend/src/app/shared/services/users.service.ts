import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IUser, IUserLogin, IUserWithToken } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _userSign: string = "http://localhost:3000/api/auth/signup/";
  private _userLogin: string = "http://localhost:3000/api/auth/login/";
  private _userInfo: string = "http://localhost:3000/api/auth/";

  userId!: string;

  constructor(
    private _http: HttpClient
  ) { }

  public post(user: IUser): Observable<IUser> {
    return this._http.post<IUser>(this._userSign, user);
  }

  public login(user: IUserLogin): Observable<IUserWithToken> {
    return this._http.post<IUserWithToken>(this._userLogin, user)
  }


  public get(id: string): Observable<IUser> {
    return this._http.get<IUser>(this._userInfo + id);
  }

  public delete() { }
  public put() { }
  public update() {

  }
}
