import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../structures/utilisateur';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private _users:Utilisateur[];
  get users():Utilisateur[] {return [...this._users];}
  set users(t:Utilisateur[]) {this._users = t;}
  
  public getUser(index:number):Utilisateur|undefined {
    if (index < this._users.length)
      return this._users[index];
    return undefined;
  }

  constructor() {
    const rootDirPhotos = 'https://randomuser.me/api/portraits/thumb';
    this.users = [
      {
        sexe:1, prenom:"Jean-Philippe", nom:"Airvite", ville:"Montfroc",  
        mail:"jpairvite@petitsbateaux.fr" , ddn:new Date(1995, 10, 20), photo:rootDirPhotos + "/men/14.jpg"
      }, 
      {
        sexe:2, prenom:"Anastasie", nom:"Générale", ville:"L'Hospitalet", 
        mail:"egenerale@yopmail.com" , ddn:new Date(1990, 11, 22), photo:rootDirPhotos + "/women/13.jpg"
      },
      {
        sexe:1, prenom:"Eddy", nom:"Donque", ville:"Douala", 
        mail:"edonque@orange.cm" , ddn:new Date(1985, 12, 24), photo:rootDirPhotos + "/men/16.jpg"
      },
      {
        sexe:2, prenom:"Sophie", nom:"Fonsec", ville:"Bayonne", 
        mail:"sfonsec@free.fr" , ddn:new Date(1980, 1, 26), photo:rootDirPhotos +"/women/8.jpg"
      }
    ];
  }

  ngOnInit(): void {
  }

}
