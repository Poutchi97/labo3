import { Injectable } from '@angular/core';
import { IAnimeDatas } from 'src/app/models/ianime-datas';

@Injectable({
  providedIn: 'root'
})
export class SortingAnimeService {

  public newAnimeTab: IAnimeDatas[] = [];
  public currentQueryParam!: any;
  constructor() { }

  public sortingByRating(animeTab: IAnimeDatas[]) {
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

  public sortingByUserCount(animeTab: IAnimeDatas[]) {
    let temp: number[] = [];
    animeTab.forEach(element => {
      temp.push(parseInt(element.userCount) ?? "");
    });
    temp.sort((a, b) => b - a);

    this.newAnimeTab = [];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < animeTab.length; j++) {
        if (parseInt(animeTab[j].userCount) === temp[i]) {
          this.newAnimeTab.push(animeTab[j])
        }
      }
    }
    return this.newAnimeTab;
  }

  public sortingByStartingDate(animeTab: IAnimeDatas[]) {
    let temp: string[] = [];
    animeTab.forEach(element => {
      temp.push(element.startDate);
    });
    temp.sort(function (a, b) {
      a = a.split('/').reverse().join('');
      b = b.split('/').reverse().join('');
      return a > b ? 1 : a < b ? -1 : 0;
    });
    this.newAnimeTab = [];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < animeTab.length; j++) {
        if (animeTab[j].startDate === temp[i]) {
          this.newAnimeTab.push(animeTab[j])
        }
      }
    }
    return this.newAnimeTab;
  }

  public sortingByEndingDate(animeTab: IAnimeDatas[]) {
    let temp: string[] = [];
    animeTab.forEach(element => {
      temp.push(element.startDate);
    });
    temp.sort(function (a, b) {
      a = a.split('/').reverse().join('');
      b = b.split('/').reverse().join('');
      return a > b ? -1 : a < b ? 1 : 0;
    });
    console.log(temp);

    this.newAnimeTab = [];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < animeTab.length; j++) {
        if (animeTab[j].startDate === temp[i]) {
          this.newAnimeTab.push(animeTab[j])
        }
      }
    }
    return this.newAnimeTab;
  }


}
