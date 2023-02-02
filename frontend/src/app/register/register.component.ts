import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/iuser';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup
  public usersLength!: number;
  constructor(
    private _fb: FormBuilder,
    private _localStorage: LocalStorageService,
    private _router: Router,
    private _register: UsersService
  ) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      pseudo: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })

  }

  public onSubmit() {
    let newUser: IUser = {
      pseudo: this.registerForm.value.pseudo,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      status: ''
    }

    this._register.post(newUser).subscribe({
      next: data => console.log(data)
    });
  }

}
