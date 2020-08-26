import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import {Titre} from './structures/titre';
import {ItemMenu} from './structures/itemmenu';
import {Orientation} from './structures/orientation';


@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre:Titre = {valeur:"menu", infoBulle:"menu latéral"};
  private _menuOrientation:Orientation = Orientation.HORIZONTAL;
  private _items:ItemMenu[];
  private _boutonInactif:boolean = false;
  
  get titre() {return this._titre;}
  set titre(t:Titre) {this._titre = t;}

  get items() { return this._items; }
  set items(t:ItemMenu[]) { this._items = t; }

  get menuOrientation() {return this._menuOrientation;}
  set menuOrientation(o:Orientation) {this._menuOrientation = o;}

  constructor() {
    this.titre = {valeur:"Titre", infoBulle:"titre de la page"};
    this.items = [
      {url:"https://www.google.fr", intitule:"Google"},
      {url:"https://www.bing.fr", intitule:"Bing"}
    ];
    // this.menuOrientation = Orientation.HORIZONTAL; // 0
    this.menuOrientation = Orientation.VERTICAL; // 1
    // console.log("app:orientation=", this.menuOrientation);
  }
}

