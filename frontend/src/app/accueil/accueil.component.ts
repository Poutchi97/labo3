import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { IAnimeDatas, IData } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  public anime!: any[];
  public animes!: any[];
  public animesCopy!: any[];
  constructor(
    private _api: AnimeApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._api.getAll().subscribe({
      next: (datas) => {
        this.animes = datas.data
        this.animesCopy = datas.data
        console.log('this anime', datas.data)
      }
    });

  }

  public displayDetails(id: number) {
    let currentAnime = this.animesCopy[id];
    console.log(currentAnime)
    this._router.navigateByUrl('/anime/' + currentAnime.id)
  }

  // public modifyAnime(id: number) {
  //   let currentAnime = this.animesCopy[id];
  //   this._router.navigateByUrl('/anime/modify/' + currentAnime.data.id)
  // }

  public setParamSorting(event: any) {

  }


}
