import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
  // styles:[`p {border:solid blue 1px}`]
})
export class EnteteComponent implements OnInit {
  private readonly _aujourdhui:Date;
  private readonly _aujourdhuiStr:string;

  get aujourdhui() {return this._aujourdhui;}
  get aujourdhuiStr() {return this._aujourdhuiStr;}
  
  constructor() { 
    this._aujourdhui = new Date();
    const options = {year:'numeric', month:'numeric', day:'numeric'};
    this._aujourdhuiStr = this._aujourdhui.toLocaleDateString('fr-FR', options);
  }

  ngOnInit(): void {
  }
}
