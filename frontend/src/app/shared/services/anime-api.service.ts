import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
      createdAt: data.attributes.createdAt ?? "",
      updatedAt: data.attributes.updatedAt ?? ""
    };
    return result
  }


  public getAll(): Observable<IAnimeDatas[]> {
    // let params: HttpParams = new HttpParams()
    //   .set('offset', 0)
    //   .set('limit', 6)
    return this._http.get<IGetOneResult[]>(this._url)
      .pipe(map(this._getAllResultToAnimeListArray))  // , { params: params }
  }


  private _getAllResultToAnimeListArray(data: IGetOneResult[]): IAnimeDatas[] {
    let result: IAnimeDatas[] = []
    console.log("data", data)
    data.forEach(element => result.push({
      id: element.id,
      synopsis: element.attributes.synopsis,
      en_jp: element.attributes.titles.en_jp,
      ja_jp: element.attributes.titles.ja_jp,
      originalImage: element.attributes.posterImage.original ?? "",
      createdAt: element.attributes.createdAt ?? "",
      updatedAt: element.attributes.updatedAt ?? "",
      averageRating: element.attributes.averageRating
    }));
    return result;
  }
}


