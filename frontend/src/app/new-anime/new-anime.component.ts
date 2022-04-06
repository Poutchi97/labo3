import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeApiService } from '../shared/services/anime-api.service';

@Component({
  selector: 'app-new-anime',
  templateUrl: './new-anime.component.html',
  styleUrls: ['./new-anime.component.scss']
})
export class NewAnimeComponent implements OnInit {

  public creationForm!: FormGroup
  public allAnimesLength!: number

  constructor(
    private _fb: FormBuilder,
    private _animeApi: AnimeApiService
  ) { }

  ngOnInit(): void {
    this.creationForm = this._fb.group({
      en_jp: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      episodeCount: [null, [Validators.required]],
      status: [null, [Validators.required]],
      file: [null, [Validators.required]],
    })
    this._animeApi.getAll().subscribe({
      next: allAnimes => {
        this.allAnimesLength = allAnimes.length;
      }

    });
  }



  public onSubmit() {
    if (!this.creationForm.valid) {
      throw new Error("Form not valid")
    }

    this._animeApi.post({
      id: (this.allAnimesLength + 1).toString(),
      attributes: {
        titles: {
          en_jp: this.creationForm.value.en_jp,
        },
        synopsis: this.creationForm.value.description,
        startDate: this.creationForm.value.startDate,
        episodeCount: this.creationForm.value.episodeCount,
        status: this.creationForm.value.status,
        posterImage: {
          original: this.creationForm.value.file,
        }
      }
    }).subscribe({
      next: data => console.log(data)
    })
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0].name);

      let file = event.target.files[0];
      this.creationForm.patchValue({
        filesource: file
      })
    }
  }
}
