import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private _localStorage: LocalStorageService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  public onSubmit() {
    if (this._localStorage.getUser(this.loginForm.value.email).password === this.loginForm.value.password) {
      if (this._localStorage.getUser(this.loginForm.value.email).email === this.loginForm.value.email) {

        console.dir("yes")
        this._localStorage.user = this.loginForm.value.email
        this._router.navigateByUrl('/');
      }
    }
  }
}
