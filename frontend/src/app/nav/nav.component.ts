import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isLogged!: boolean;

  public menu: Link[] = [
    new Link('New', '/new'),
  ]
  constructor(
    private _localstorage: LocalStorageService
  ) { }

  ngOnInit() {
    this._localstorage.ConnexionBehavior.subscribe({
      next: logged => this.isLogged = logged
    });
  }


  public signOut() {
    this._localstorage.deleteUser(this._localstorage.key);
  }
}
