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
      name: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      birthdate: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })

    this._register.getAll().subscribe({
      next: (datas) => {
        // console.log("getall", datas);
        this.usersLength = datas.length;

      }
    })

    this._register.get(1).subscribe({
      next: (data) => {
        // console.log("getone", data);
      }
    })

  }

  public onSubmit() {
    let newUser: IUser = {
      id: this.usersLength += 1,
      name: this.registerForm.value.name.trim(),
      firstname: this.registerForm.value.firstname.trim(),
      email: this.registerForm.value.email,
      birthdate: this.registerForm.value.birthdate,
      password: this.registerForm.value.password
    }

    this._register.post(newUser).subscribe({
      next: data => console.log(data)
    });

    this._localStorage.addUser(newUser) //, this.registerForm.value.email
  }

}
