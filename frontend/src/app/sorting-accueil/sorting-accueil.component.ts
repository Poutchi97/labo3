import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimeDatas } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';
import { SortingAnimeService } from '../shared/services/sorting-anime.service';

@Component({
  selector: 'app-sorting-accueil',
  templateUrl: './sorting-accueil.component.html',
  styleUrls: ['./sorting-accueil.component.scss']
})
export class SortingAccueilComponent implements OnInit {

  public animes: IAnimeDatas[] = [];
  constructor(
    private _sorting: SortingAnimeService,
    private _api: AnimeApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._api.getAll().subscribe(
      {
        next: (datas) => { this.animes = datas }
      }
    )

    this.animes = this._sorting.newAnimeTab;
  }

  public displayDetails(id: number) {

    this._router.navigateByUrl('/anime/' + (id + 1))
    console.log(id);
  }

}
