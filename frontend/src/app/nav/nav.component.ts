import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  public menu: Link[] = [
    // new Link('Home', '', [], true, undefined)
  ]
  constructor() { }

  ngOnInit() {

  }

}
