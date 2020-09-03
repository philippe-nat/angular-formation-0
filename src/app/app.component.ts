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
  // set items(t:ItemMenu[]) { this._items = t; }
 
  get menuOrientation() {return this._menuOrientation;}
  set menuOrientation(o:Orientation) {this._menuOrientation = o;}

  constructor(private srvLien:LiensService) { 
    // NullInjectorError:  No provider for LiensService!
    this.titre = {valeur:"Titre", infoBulle:"titre de la page"};
    this.menuOrientation = Orientation.VERTICAL;
    // this.items = [
    //   {url:"https://www.google.fr", intitule:"google"},
    //   {url:"https://www.bing.fr", intitule:"bing"}
    // ]; 
    //this._items = srvLien.items;  déplacé ds ngOnInit
    // this._items.push({url:"https://www.antivirus.fr", intitule:"antivirus"}); // ajoute
    // srvLien.add({url:"https://www.virus.fr", intitule:"virus"}); // OK
    // this.menuOrientation = Orientation.VERTICAL; // 1
  }

  ngOnInit(): void {
    this._items = this.srvLien.items; 
  }

  // ajoutDeLien(lien:ItemMenu):void {
  //   console.log("App:lien à ajouter :", lien);
  //   this.items.push(lien);
  // }
}

