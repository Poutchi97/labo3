import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimeDatas } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.scss']
})
export class AnimeDescriptionComponent implements OnInit {

  public animeDesc!: any;
  public imagePath: string = "../../assets/images/"

  constructor(
    private _api: AnimeApiService,
    private _ar: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    try {
      this._api.get(this._ar.snapshot.params['id'])
        .subscribe({
          next: (data) => {
            console.log('data', data)
            this.animeDesc = data;

            // this.imagePath = data[0].imageUrl
            console.log(this.animeDesc);

          }
        })

    } catch (error) {
      console.log(error);
      this._router.navigateByUrl('/');

    }

  }

  public onSubmit() {

  }
}
