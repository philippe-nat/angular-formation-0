import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import {Titre} from './interfaces/titre';
import {ItemMenu} from './interfaces/itemmenu';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre:Titre = {valeur:"menu", infoBulle:"menu latéral"};
  
  get titre() {return this._titre;}
  set titre(t:Titre) {this._titre = t;}

  private _items:ItemMenu[];
  // private _boutonInactif:boolean = false;

  get items() { return this._items; }
  set items(t:ItemMenu[]) { this._items = t; }

  constructor() {
    this.items = [
      {url:"https://www.google.fr", intitule:"Google"},
      {url:"https://www.bing.fr", intitule:"Bing"}
    ];
  }
}

