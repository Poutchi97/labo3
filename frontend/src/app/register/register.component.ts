import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/iuser';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _localStorage: LocalStorageService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      birthdate: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })

  }

  public onSubmit() {
    let newUser: IUser = {
      name: this.registerForm.value.name.trim(),
      firstname: this.registerForm.value.firstname.trim(),
      email: this.registerForm.value.email,
      birthdate: this.registerForm.value.birthdate,
      password: this.registerForm.value.password
    }
    // this._localStorage.createUser(newUser, (this._localStorage.getUserCount() + 1).toString());
    this._localStorage.createUser(newUser, this.registerForm.value.email);
    this._router.navigateByUrl("/");
    this._localStorage.userLogged(this.registerForm.value.email);
  }

}
