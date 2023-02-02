import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAnimeCreating } from 'src/app/models/ianime-creating';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IGetOneResult } from 'src/app/models/iget-one-result';
import { IImage } from 'src/app/models/iimage';
import { IUserCommentaryAnime } from 'src/app/models/iuser-commentary-anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  // private _url: any = "http://localhost:3000/data/";
  // private _url: any = "http://localhost:3000/api/anime/";
  private _url: any = "https://kitsu.io/api/edge/anime/";
  public imagepPath: string = "../../assets/images/"
  constructor(private _http: HttpClient) { }

  public get(id: number): Observable<IAnimeDatas[]> {
    return this._http.get<IAnimeDatas[]>(this._url + id)
  }

  public getAll(): Observable<any> {
    return this._http.get<any>(this._url);
  }

  public post(newAnime: FormData): Observable<IAnimeDatas> {
    return this._http.post<IAnimeDatas>(this._url, newAnime);
  }
  public delete(id: number) {
    return this._http.delete(this._url + id);
  }

  public update(id: number, newForm: FormData) {
    return this._http.put(this._url + id, newForm)
  }

}


