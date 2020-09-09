import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../structures/utilisateur';
import { Sexe2Str } from '../pipes/sexe2str.pipe';

@Component({
  selector: 'nat-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  private _user: Utilisateur;
  @Input() public get user(): Utilisateur {return this._user;}
  public set user(value: Utilisateur) {this._user = value;}

  constructor() { 
    console.log("constructeur user card : nom=", this.user);
    
  }

  ngOnInit(): void {}
}
