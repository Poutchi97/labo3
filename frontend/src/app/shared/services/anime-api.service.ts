import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAnimeCreating } from 'src/app/models/ianime-creating';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IGetOneResult } from 'src/app/models/iget-one-result';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {

  private _url: any = "http://localhost:3000/data/";
  constructor(private _http: HttpClient) { }

  public get(id: number): Observable<IAnimeDatas> {
    return this._http.get<IGetOneResult>(this._url + id)
      .pipe(map(this._getOneResultToAnimeBase))
  }

  private _getOneResultToAnimeBase(data: IGetOneResult): IAnimeDatas {
    let result: IAnimeDatas = {
      id: data.id,
      synopsis: data.attributes.synopsis,
      en_jp: data.attributes.titles.en_jp,
      ja_jp: data.attributes.titles.ja_jp,
      originalImage: data.attributes.posterImage.original ?? "",
      startDate: data.attributes.startDate,
      endDate: data.attributes.endDate ?? "",
      userCount: data.attributes.userCount,
      status: data.attributes.status,
      episodeCount: data.attributes.episodeCount

    };
    return result
  }


  public getAll(): Observable<IAnimeDatas[]> {
    let params: HttpParams = new HttpParams()
      .set('[offset]', 0)
      .set('[limit]', 6)
    return this._http.get<IGetOneResult[]>(this._url, { params: params })
      .pipe(map(this._getAllResultToAnimeListArray))  // 
  }


  public _getAllResultToAnimeListArray(data: IGetOneResult[]): IAnimeDatas[] {
    let result: IAnimeDatas[] = [];
    data.forEach(element => result.push({
      id: element.id,
      synopsis: element.attributes.synopsis,
      en_jp: element.attributes.titles.en_jp,
      ja_jp: element.attributes.titles.ja_jp ?? "",
      originalImage: element.attributes.posterImage.original ?? "",
      startDate: element.attributes.startDate,
      endDate: element.attributes.endDate ?? "",
      averageRating: element.attributes.averageRating,
      userCount: element.attributes.userCount,
      status: element.attributes.status,
      episodeCount: element.attributes.episodeCount
    }));
    return result;
  }

  public post(newAnime: IGetOneResult): Observable<IGetOneResult> {
    return this._http.post<IGetOneResult>(this._url, newAnime);
  }


  public delete(id: number) {
    return this._http.delete(this._url + id);
  }


}


