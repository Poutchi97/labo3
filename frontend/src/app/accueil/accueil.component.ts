import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IAnimeDatas } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public isVisible!: any;
  public animes: IAnimeDatas[] = []
  public anime!: IAnimeDatas;
  constructor(
    private _primengConfig: PrimeNGConfig,
    private _api: AnimeApiService
  ) {
  }


  ngOnInit(): void {
    this._primengConfig.ripple = true;

    this._api.get(4).subscribe({
      next: (data) => {
        this.anime = data;
      }
    })


    this._api.getAll().subscribe(
      {
        next: (datas) => { this.animes = datas, console.log(datas), console.log(this.animes) }
      }
    )
  }

  public displayDescription() {
    let btn: any = document.querySelector('.button')
    console.log(btn)
    btn.classname = "isVisible"

  }

}
