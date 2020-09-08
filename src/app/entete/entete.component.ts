import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {ItemMenu} from '../structures/itemmenu';
import {Orientation} from '../structures/orientation';
import { LiensService } from '../services/liens.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nat-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
  changeDetection:ChangeDetectionStrategy.Default
})
export class EnteteComponent implements OnInit, OnDestroy {
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
  private _abonnement:Subscription;
  

  constructor(private srvLiens:LiensService) {
    this._compteur = 0;
    this._aujourdhui = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this._aujourdhuiStr = this._aujourdhui.toLocaleDateString('fr-FR', options);
    this.menuOrientation = Orientation.HORIZONTAL;

    // this.items = [
    //   {url:"https://www.google.fr", intitule:"Google"},
    //   {url:"https://www.bing.fr",   intitule:"Bing"},
    //   {url:"https://www.perdu.com", intitule:"Perdu !"}
    // ];
  }
  ngOnDestroy(): void {
    this._abonnement.unsubscribe();
  }
  ngOnInit(): void {
    this.items = this.srvLiens.items;
    console.log("observable entete :", this.srvLiens.items$);
    this._abonnement = this.srvLiens.items$.subscribe(nouveauxLiens => {this.items = nouveauxLiens;});
  }

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

  // ajoutDeLien(lien:ItemMenu):void {
  //   console.log("entete:lien à ajouter :", lien);
  //   this.items.push(lien);
  // }
}
