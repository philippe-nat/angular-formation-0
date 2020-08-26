import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Titre} from '../../core';

@Component({
  selector: 'nat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _titre:Titre;
  private _nbClics:number = 0;
  private static nbClicsTotal:number = 0;
  private _items = [];

  get titre() { return this._titre; }
  @Input() set titre(t: Titre) { this._titre = t; }

  get items() { return this._items; }
  @Input() set items(t: Array<any>) { this._items = t; }

  get nbClics() { return this._nbClics; }
  set nbClics(c:number) { this._nbClics = c; }
  get nbClicsTotal() { return MenuComponent.nbClicsTotal; }

  constructor() {
    this.titre = {valeur:"menu", infoBulle:""};
    this.items = [];
  }
  
  @Output() clickEvent = new EventEmitter();
  public clicCompteur(detailEvenement: any):void {
    console.log("clicCompteur, detailEvenement :", detailEvenement);
    console.log("clicCompteur, nbClics avant changement :", this.nbClics);
    this.nbClics++;
    MenuComponent.nbClicsTotal++;
    console.log("nb de clics sur le bouton du menu : ", this.nbClics, ", nb total :", MenuComponent.nbClicsTotal);
    this.clickEvent.emit(this.nbClics);
  }

  ngOnInit(): void {}
}
