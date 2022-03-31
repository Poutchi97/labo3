import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _localStorage: LocalStorageService) { }

  ngOnInit(): void {

    this.loginForm = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  public onSubmit() {
    let user = this._localStorage.userLogged(this.loginForm.value.email)

    if (user) {
      if (this._localStorage.getUser(this.loginForm.value.email).password === this.loginForm.value.password) {
        console.dir("yes")
      }
    }
  }



}
