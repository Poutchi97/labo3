import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimeDatas } from '../models/ianime-datas';
import { AnimeApiService } from '../shared/services/anime-api.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  public modifyForm!: FormGroup
  public allAnimesLength!: number
  public animeImage: any;
  public animeId!: number;
  public anime!: IAnimeDatas[];

  constructor(
    private _fb: FormBuilder,
    private _animeApi: AnimeApiService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.animeId = this._activatedRoute.snapshot.params['id'];
    console.log(this.animeId);


    // try {
    // this._animeApi.get(this.animeId)
    //   .subscribe({
    //     next: (data) => {
    //       this.anime = data
    //       this.modifyForm = this._fb.group({
    //         en_jp: [data[0].en_jp, null],
    //         ja_jp: [data[0].ja_jp, null],
    //         synopsis: [data[0].synopsis, null],
    //         created_date: [data[0].creation_date, null],
    //         status: [data[0].status, null],
    //         episode_count: [data[0].episode_count, null],
    //         imageFile: [null, null],
    //       });

    //         }
    //       })
    //   } catch (error) {
    //     console.warn(error);
    //     this._router.navigateByUrl('/');

    //   }
  }



  public onSubmit() {
    if (!this.modifyForm.valid) {
      throw new Error("Form not valid")
    }

    const anime = new FormData();
    anime.append('animecover', this.animeImage)
    anime.append('en_jp', this.modifyForm.value.en_jp)
    anime.append('ja_jp', this.modifyForm.value.ja_jp)
    anime.append('synopsis', this.modifyForm.value.synopsis)
    anime.append('creation_date', this.modifyForm.value.created_date)
    anime.append('status', this.modifyForm.value.status)
    anime.append('episode_count', this.modifyForm.value.episode_count)

    this._animeApi.update(this.animeId, anime).subscribe(
    );
    setTimeout(() => {
      this._router.navigateByUrl('/');
    }, 1500)


  }

  public upload(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.animeImage = file;

    }
  }



}
