import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _titre: string;

  get titre() { return this._titre; }
  @Input('title') set titre(t: string) { this._titre = t; }

  constructor() {
    this.titre = "menu";
  }

  ngOnInit(): void {
  }
}
