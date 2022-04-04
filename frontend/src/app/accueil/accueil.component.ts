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
        this.sortStatus = params;
      })

  }

  public displayDetails(id: number) {
    let currentAnime = this.animesCopy[id];
    this._router.navigateByUrl('/anime/' + currentAnime.id)
    console.log(this.sortStatus)

  }

  public searchBy(event: any) {
    if (event.target.value == "") {
      this.animesCopy = this.animes
      this._router.navigateByUrl("/");
    }
    else {
      this.animesCopy = this._sorting.sortingBy(this.animes);
      this._router.navigate(['/'], { queryParams: { sb: event.target.value } })
      // console.dir(this._sorting.sortingByRating(this.animes))
    }
  }



}
