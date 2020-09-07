import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';
import {Titre} from './structures/titre';
import {ItemMenu} from './structures/itemmenu';
import {Orientation} from './structures/orientation';
import {LiensService} from './services/liens.services';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  private _titre:Titre = {valeur:"menu", infoBulle:"menu latéral"};
  private _menuOrientation:Orientation = Orientation.HORIZONTAL;
  private _items:ItemMenu[];
  private _boutonInactif:boolean = false;
  
  get titre() {return this._titre;}
  set titre(t:Titre) {this._titre = t;}

  get items() { return [...this._items]; }
  
  get menuOrientation() {return this._menuOrientation;}
  set menuOrientation(o:Orientation) {this._menuOrientation = o;}

  constructor(private srvLien:LiensService) { 
    this.titre = {valeur:"Titre", infoBulle:"titre de la page"};
    this.menuOrientation = Orientation.VERTICAL;
  }

  ngOnInit(): void {
    this._items = this.srvLien.items; 
  }
}

