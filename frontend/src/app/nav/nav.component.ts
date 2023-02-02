import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/iuser';
import { Link } from '../models/link';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isLogged!: boolean;
  // public user!: IUser

  public menu: Link[] = [
    new Link('New', '/new'),
  ]
  constructor(
    private _localstorage: LocalStorageService,
    private _user: UsersService
  ) { }

  ngOnInit() {
    this._localstorage.ConnexionBehavior.subscribe({
      next: logged => this.isLogged = logged
    });

    // this._user.get(this._user.userId).subscribe(
    //   data => {
    //     // this.user = data
    //     console.log(data);
    //   });

  }


  public signOut() {
    this._localstorage.deleteUser();
  }
}
