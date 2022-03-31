import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/iuser';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  constructor(private _localStorage: LocalStorageService, private _activatedRoute: ActivatedRoute,
    private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user: IUser
    try {
      // user = this._localStorage.getUser()
    } catch (error) {
      return true
    }
    // console.warn({ guardPath: this._activatedRoute.snapshot.url, reason: user.email + "Already connected" })
    this._router.navigateByUrl('/notFound')
    return false;
  }
}
