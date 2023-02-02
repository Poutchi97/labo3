
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IImage } from '../models/iimage';
import { AnimeApiService } from '../shared/services/anime-api.service';



@Component({
  selector: 'app-new-anime',
  templateUrl: './new-anime.component.html',
  styleUrls: ['./new-anime.component.scss']
})
export class NewAnimeComponent implements OnInit {

  public creationForm!: FormGroup
  public allAnimesLength!: number
  public animeImage: any;
  public animePoster: any;

  constructor(
    private _fb: FormBuilder,
    private _animeApi: AnimeApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.creationForm = this._fb.group({
      en_jp: [null, [Validators.required]],
      ja_jp: [null, null],
      synopsis: [null, [Validators.required]],
      created_date: [null, [Validators.required]],
      status: [null, Validators.required],
      episode_count: [null, [Validators.required]],
      imageFile: [null, [Validators.required]],
      posterFile: [null, [Validators.required]],
    })
  }

  public onSubmit() {
    if (!this.creationForm.valid) {
      throw new Error("Form not valid")
    }

    const anime = new FormData();
    anime.append('animecover', this.animeImage)
    anime.append('animeposter', this.animePoster)
    anime.append('en_jp', this.creationForm.value.en_jp)
    anime.append('ja_jp', this.creationForm.value.ja_jp)
    anime.append('synopsis', this.creationForm.value.synopsis)
    anime.append('creation_date', this.creationForm.value.created_date)
    anime.append('status', this.creationForm.value.status)
    anime.append('episode_count', this.creationForm.value.episode_count)

    this._animeApi.post(anime).subscribe(
    );
    this._router.navigateByUrl('/');

  }

  public uploadCover(event: any) {
    console.log('event', event);

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('cover', file);

      this.animeImage = file;

    }
  }
  public uploadPoster(event: any) {
    console.log('event', event);

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      console.log('poster', file);
      this.animePoster = file;

    }
  }


}
