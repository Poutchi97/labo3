import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/iuser';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _localStorage: LocalStorageService,
    private _router: Router,
    private _users: UsersService

  ) { }

  ngOnInit(): void {

    this.loginForm = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  public onSubmit() {
    this._users.getAll().subscribe({
      next: datas => datas.forEach(user => {
        if (user.email === this.loginForm.value.email && user.password === this.loginForm.value.password) {
          this._router.navigateByUrl("/");
          this._localStorage.addUser(user);//, this.loginForm.value.email
        }
      })
    })
  }
}
