import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _userUrl: string = "http://localhost:3000/users/";
  constructor(
    private _http: HttpClient
  ) { }

  public post(user: IUser): Observable<IUser> {
    return this._http.post<IUser>(this._userUrl, user);
  }
  public get(id: number): Observable<IUser> {
    return this._http.get<IUser>(this._userUrl + id)
  }

  public getAll(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userUrl);
  }

  public delete() { }
  public put() { }
  public update() {

  }
}
