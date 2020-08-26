import { Component, OnInit } from '@angular/core';
import {ItemMenu} from '../structures/itemmenu';
import {Orientation} from '../structures/orientation';

@Component({
  selector: 'nat-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  private readonly _aujourdhui: Date;
  private readonly _aujourdhuiStr: string;
  private _compteur: number;
  private _menuOrientation:Orientation = Orientation.HORIZONTAL;
  private _items:ItemMenu[];
  // private _boutonInactif:boolean = false;

  get aujourdhui() { return this._aujourdhui; }
  get aujourdhuiStr() { return this._aujourdhuiStr; }
  get compteur() {return this._compteur;}
  set compteur(val:number) {this._compteur = val;}
  get menuOrientation() {return this._menuOrientation;}
  set menuOrientation(o:Orientation) {this._menuOrientation = o;}
  get items() { return this._items; }
  set items(t:ItemMenu[]) { this._items = t; }

  constructor() {
    this._compteur = 0;
    this._aujourdhui = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this._aujourdhuiStr = this._aujourdhui.toLocaleDateString('fr-FR', options);
    this.menuOrientation = Orientation.HORIZONTAL;

    this.items = [
      {url:"https://www.google.fr", intitule:"Google"},
      {url:"https://www.bing.fr",   intitule:"Bing"},
      {url:"https://www.perdu.com", intitule:"Perdu !"}
    ];
  }
  ngOnInit(): void {}

  public afficheMomentActuel(): string {
    let auj: Date = new Date();
    return auj.toLocaleDateString('fr-FR') + " " + auj.toLocaleTimeString();
  }

  public incrementeCompteur():void {this.compteur++;}
  public augmenteCompteur(valeur: number):void {
    console.log("appel à augmenteCompteur. Ancienne valeur :", this.compteur);
    this.compteur+=valeur;
    console.log("Nouvelle valeur :", this.compteur);
  }
  public logCompteur():void {console.log("compteur = ", this.compteur);}
  public logCoucou():void {console.log("méthode logCoucou");}
}
