import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _titre: string;
  private _infoBulle:string;
  private _nbClics:number = 0;
  private static nbClicsTotal:number = 0;

  get titre() { return this._titre; }
  @Input() set titre(t: string) { this._titre = t; }

  get infoBulle() { return this._infoBulle; }
  @Input() set infoBulle(info: string) { this._infoBulle = info; }

  get nbClics() { return this._nbClics; }
  set nbClics(c:number) { this._nbClics = c; }
  
  get nbClicsTotal() { return MenuComponent.nbClicsTotal; }

  constructor() {
    this.titre = "menu";
    this.infoBulle = "";
  }

  @Output() clickEvent = new EventEmitter();
  public clicCompteur(detailEvenement: any):void {
    console.log("clicCompteur, detailEvenement :", detailEvenement);
    console.log("clicCompteur, nbClics avant changement :", this.nbClics);
    this.nbClics++;
    MenuComponent.nbClicsTotal++;
    console.log("nb de clics sur le bouton du menu : ", this.nbClics, ", nb total :", MenuComponent.nbClicsTotal);
    // this.clickEvent.emit();
    this.clickEvent.emit(this.nbClics);
  }

  ngOnInit(): void {}
}
