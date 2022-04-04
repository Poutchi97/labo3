import { Injectable } from '@angular/core';
import { IAnimeDatas } from 'src/app/models/ianime-datas';

@Injectable({
  providedIn: 'root'
})
export class SortingAnimeService {

  public newAnimeTab: IAnimeDatas[] = [];

  constructor() { }

  public sortingBy(animeTab: IAnimeDatas[]): IAnimeDatas[] {
    let temp: string[] = [];
    animeTab.forEach(element => {
      temp.push(element.averageRating ?? "");
    });
    temp.sort().reverse();

    this.newAnimeTab = [];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < animeTab.length; j++) {
        if (animeTab[j].averageRating === temp[i]) {
          this.newAnimeTab.push(animeTab[j])
        }
      }
    }
    return this.newAnimeTab;

  }
}
