import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  private readonly _aujourdhui: Date;
  private readonly _aujourdhuiStr: string;
  private _compteur: number;

  get aujourdhui() { return this._aujourdhui; }
  get aujourdhuiStr() { return this._aujourdhuiStr; }
  get compteur() {return this._compteur;}
  set compteur(val:number) {this._compteur = val;}

  constructor() {
    this._compteur = 0;
    this._aujourdhui = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this._aujourdhuiStr = this._aujourdhui.toLocaleDateString('fr-FR', options);
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
