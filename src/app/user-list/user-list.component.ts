import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../structures/utilisateur';
import { HttpClient } from '@angular/common/http';
import { UserManagerService } from '../services/user-manager.service';

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

  constructor(private um:UserManagerService) {
    // um.nbDemande = 20;
    // um.urlGet = 'https://randomuser.me/api/';
    const rootDirPhotos = 'https://randomuser.me/api/portraits/thumb';
    this.users = [];
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
      // console.log("for: user net = ", user);
      
      this._users.push(user);
    }
  }

  public loadUsers(nb:number):void {
    console.log("user-list.loadUser:nb=", nb, "type : ", typeof(nb));
    
    // const url = "https://randomuser.me/api/";
    this.um.nbDemande = nb;
    console.log("user-list.loadUser 2 :nb=", nb);
    this._users = [];
    this.um.getUsers().subscribe(
        (res:any) => {
          this._usersBrut = res.results;
          // console.log("tableau brut : ", this._usersBrut);
          this.usersBrut2Users();
          // console.log("tableau net : ", this.users);
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
