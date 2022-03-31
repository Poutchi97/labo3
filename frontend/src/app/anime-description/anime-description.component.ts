import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimeDescriptionBase } from '../models/ianime-description-base';
import { AnimeDescriptionService } from '../shared/services/anime-description.service';

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.scss']
})
export class AnimeDescriptionComponent implements OnInit {
  public animeDesc!: IAnimeDescriptionBase
  constructor(
    private _animeDesc: AnimeDescriptionService,
    private _ar: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    try {
      this._animeDesc.getDescription(this._ar.snapshot.params['id'])
        .subscribe({
          next: (data) => {
            this.animeDesc = data;
          }
        });

    } catch (error) {
      console.warn(error);
      this._router.navigateByUrl("/")
    }
  }

}
