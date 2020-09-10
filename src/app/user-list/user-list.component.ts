import { Component, OnInit, OnDestroy } from '@angular/core';
import {Utilisateur} from '../structures/utilisateur';
import { HttpClient } from '@angular/common/http';
import { UserManagerService } from '../services/user-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  private _users:Utilisateur[];
  get users():Utilisateur[] {return [...this._users];}
  set users(t:Utilisateur[]) {this._users = t;}
  private _usersBrut:any[];
  private _souscription:Subscription;

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
    const rootDirPhotos = 'https://randomuser.me/api/portraits/thumb';
    this.users = [];
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {if (this._souscription !== undefined) this._souscription.unsubscribe();}

  public loadUsers(nb:number):void {
    console.log("user-list.loadUser:nb=", nb, "type : ", typeof(nb));
    
    this.um.nbDemande = nb;
    console.log("user-list.loadUser 2 :nb=", nb);
    this._users = [];
    this._souscription = this.um.getUsers().subscribe(
        (res:any) => {
          console.log("user-list.loadUsers : tableau brut : ", res);
          try {
            this._users = res;
          } catch(erreur) {
            this._errChargement = erreur;
            console.error(erreur);
          }
        },
        (err:any) => {
          console.log("Une erreur est survenue :", err.message);
          this._errChargement = err.message;
        },
        () => {
          console.log("FIN du remplissage de la liste");
          this._listeChargee = true;
          this._souscription.unsubscribe();
        }
    );
    // this._souscription.unsubscribe();
  }
}
