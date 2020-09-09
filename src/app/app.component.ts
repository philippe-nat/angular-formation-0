import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeoutError, Subscription } from 'rxjs';
import {Titre} from './structures/titre';
import {ItemMenu} from './structures/itemmenu';
import {Orientation} from './structures/orientation';
import {LiensService} from './services/liens.services';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  private _titre:Titre = {valeur:"menu", infoBulle:"menu latéral"};
  private _menuOrientation:Orientation = Orientation.HORIZONTAL;
  private _items:ItemMenu[];
  private _boutonInactif:boolean = false;
  private _abonnement:Subscription;
  
  get titre() {return this._titre;}
  set titre(t:Titre) {this._titre = t;}

  get items() { return [...this._items]; }
  set items(liens:ItemMenu[]) {this._items = liens; }
  
  get menuOrientation() {return this._menuOrientation;}
  set menuOrientation(o:Orientation) {this._menuOrientation = o;}

  constructor(private srvLien:LiensService) { 
    this.titre = {valeur:"Titre", infoBulle:"titre de la page"};
    this.menuOrientation = Orientation.VERTICAL;
    // console.log("constructeur app");
    // console.log("srvLien:", srvLien);
  }

   ngOnInit(): void {
    this._items = this.srvLien.items; 
    // console.log("init app, service : ", this.srvLien);
    // console.log("observable app direct : ", this.srvLien._items$); // OK
    // console.log("observable app par getter : ", this.srvLien.items$); // undefined
    
    this._abonnement = this.srvLien.items$.subscribe(nouveauxLiens => {this.items = nouveauxLiens;});
  }

  ngOnDestroy():void {
    this._abonnement.unsubscribe();
  }
}

