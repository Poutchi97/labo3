import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAnimeDatas } from 'src/app/models/ianime-datas';
import { IAnimeDescription } from 'src/app/models/ianime-description';
import { IAnimeDescriptionBase } from 'src/app/models/ianime-description-base';
import { IGetOneResult } from 'src/app/models/iget-one-result';

@Injectable({
  providedIn: 'root'
})
export class AnimeDescriptionService {
  private _url: any = "http://localhost:3000/data/";
  private animeDescriptions: IAnimeDescriptionBase[] = [];

  constructor(
    private _http: HttpClient
  ) { }
  public getAllDescription(): IAnimeDescriptionBase[] {
    return this.animeDescriptions;
  }

  // public get(id: number): IAnimeDescriptionBase {
  //   let animeDesc: IAnimeDescriptionBase | undefined = this.animeDescriptions.find(ad => ad.id == id);
  //   if (!animeDesc) {
  //     throw new Error(`No anime with id : ${id}`)
  //   }
  //   else {
  //     return animeDesc
  //   }
  // }

  public getDescription(id: number): Observable<IAnimeDescriptionBase> {
    return this._http.get<IAnimeDescription>(this._url + id)
      .pipe(map(this._getOneResultDescription));
  }
  private _getOneResultDescription(data: IAnimeDescription): IAnimeDescriptionBase {
    let result: IAnimeDescriptionBase = {
      id: data.id,
      synopsis: data.attributes.synopsis,
      en_jp: data.attributes.titles.en_jp,
      ja_jp: data.attributes.titles.ja_jp,
      averageRating: data.attributes.averageRating,
      startDate: data.attributes.startDate,
      endDate: data.attributes.endDate ?? "",
      ratingRank: data.attributes.ratingRank,
      ageRatingGuide: data.attributes.ageRatingGuide,
      status: data.attributes.status,
      episodeCount: data.attributes.episodeCount,
      tiny: data.attributes.posterImage.tiny,
      large: data.attributes.posterImage.large,
      small: data.attributes.posterImage.small,
      medium: data.attributes.posterImage.medium,
      original: data.attributes.posterImage.original
    }

    return result;
  }
}
