import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../structures/utilisateur';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private _users:Utilisateur[];
  get users():Utilisateur[] {return [...this._users];}
  set users(t:Utilisateur[]) {this._users = t;}
  private _usersBrut:any[];

  private _listeChargee: boolean = false;
  public get listeChargee(): boolean {return this._listeChargee;}
  // public set listeChargee(value: boolean) {this._listeChargee = value;}

  private _errChargement: string = "";
  public get errChargement(): string {return this._errChargement;}
  // public set errChargement(value: string) {this._errChargement = value;}
  
  public getUser(index:number):Utilisateur|undefined {
    if (index < this._users.length)
      return this._users[index];
    return undefined;
  }

  constructor(private httpC:HttpClient) {
    const rootDirPhotos = 'https://randomuser.me/api/portraits/thumb';
    this.users = [];
    // this.users = [
    //   {
    //     sexe:1, prenom:"Jean-Philippe", nom:"Airvite", ville:"Montfroc",  
    //     mail:"jpairvite@petitsbateaux.fr" , ddn:new Date(1995, 10, 20), photo:rootDirPhotos + "/men/14.jpg"
    //   }, 
    //   {
    //     sexe:2, prenom:"Anastasie", nom:"Générale", ville:"L'Hospitalet", 
    //     mail:"egenerale@yopmail.com" , ddn:new Date(1990, 11, 22), photo:rootDirPhotos + "/women/13.jpg"
    //   },
    //   {
    //     sexe:1, prenom:"Eddy", nom:"Donque", ville:"Douala", 
    //     mail:"edonque@orange.cm" , ddn:new Date(1985, 12, 24), photo:rootDirPhotos + "/men/16.jpg"
    //   },
    //   {
    //     sexe:2, prenom:"Sophie", nom:"Fonsec", ville:"Bayonne", 
    //     mail:"sfonsec@free.fr" , ddn:new Date(1980, 1, 26), photo:rootDirPhotos +"/women/8.jpg"
    //   }
    // ];
  }

  ngOnInit(): void {}

  private usersBrut2Users():void {
    for (let u of this._usersBrut) {
      let user:Utilisateur = <Utilisateur>{};
      user.sexe   = u.gender == 'male' ? 1 : 2;
      user.prenom = u.name.first;
      user.nom    = u.name.last;
      user.ville  = u.location.city;
      user.mail   = u.email;
      user.ddn    = u.dob.date;
      user.photo  = u.picture.thumbnail;
      console.log("for: user net = ", user);
      
      this._users.push(user);
    }
  }

  public loadUsers():void {
    const url = "https://zzrandomuser.me/api/?results=20";
    this.httpC
      .get(url)
      .subscribe( 
        (res:any) => {
          this._usersBrut = res.results;
          console.log("tableau brut : ", this._usersBrut);
          this.usersBrut2Users();
          console.log("tableau net : ", this.users);
        },
        (err:any) => {
          console.log("Une erreur est survenue :", err.message);
          this._errChargement = err.message;
        },
        () => {
          console.log("FIN du remplissage de la liste");
          this._listeChargee = true;
        }
    );
  }
}
