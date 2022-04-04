import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { IAnimeDatas } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';
import { SortingAnimeService } from '../shared/services/sorting-anime.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public animeDescription!: number;
  public isVisible!: any;
  public animes: IAnimeDatas[] = []
  public animesCopy: IAnimeDatas[] = [];
  public anime!: IAnimeDatas;
  public sortStatus!: Params;



  constructor(
    private _api: AnimeApiService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _sorting: SortingAnimeService
  ) {
  }


  ngOnInit(): void {

    this._api.get(4).subscribe({
      next: (data) => {
        this.anime = data;
      }
    })

    this._api.getAll().subscribe(
      {
        next: (datas) => {
          this.animes = datas,
            this.animesCopy = datas
        }
      }
    )
    // get the current queryparams in url
    this._activatedRoute.queryParams
      .subscribe(params => {
        console.log(this.animesCopy);

        switch (params['sb']) {
          case 'rating':
            this.animesCopy = this._sorting.sortingByRating(this.animes);
            break;

          case 'startingDate':
            this.animesCopy = this._sorting.sortingByStartingDate(this.animes);
            break;

          case 'endingDate':
            this.animesCopy = this._sorting.sortingByEndingDate(this.animes);
            break;

          case 'userCount':
            this.animesCopy = this._sorting.sortingByUserCount(this.animes);
            console.log(this.animesCopy);

            break;

          default:
            this.animesCopy = this.animes
            break;
        }
      })

  }

  public displayDetails(id: number) {
    let currentAnime = this.animesCopy[id];
    this._router.navigateByUrl('/anime/' + currentAnime.id)
    console.log(this.sortStatus)

  }

  public setParamSorting(event: any) {
    if (event.target.value == "") {
      this._router.navigateByUrl("/");
    }
    else {
      this._router.navigate(['/'], { queryParams: { sb: event.target.value } })
    }
  }



}
