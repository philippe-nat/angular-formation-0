import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../structures/utilisateur';
import { Observable } from 'rxjs';

@Injectable()
export class UserManagerService {
    private _urlGet:string = "https://randomuser.me/api/?results=20";
    public get urlGet():string {return this._urlGet;}
    public set urlGet(value:string) {this._urlGet = value;}

    private _nbDemande: number;
    public get nbDemande(): number {return this._nbDemande;}
    public set nbDemande(n: number) {
        console.log("appel au setter de nbDemande. En paramètre : ", n);
        if (n > 0 && Number.isInteger(n)) 
            this._nbDemande = n;
        else
            console.log(n, "n'est pas un entier. mutateur refusé");
            
        console.log("setter de nbDemande : reponse = ", this._nbDemande);
    }

    // private _usersBrut:any[];

    constructor(private httpc:HttpClient/*, url:string, nbUsers?:number*/) {
        // this.urlGet = url;
        // this.nbDemande = nbUsers;
    }

    public getUsers():Observable<any> {
        // this.nbDemande = nb;
        console.log("service user-manager : chargement de", this.nbDemande, " utilisateurs");
        
        // requête HTTP get sur randomuser. Retourne un observable (pas de souscription)
        if (typeof(this.nbDemande) != 'undefined')
            this.urlGet += ("?results=" + this.nbDemande);
        console.log("url = ", this.urlGet);
        return this.httpc.get(this.urlGet);
    }

    // private usersBrut2Users():void {
    //     for (let u of this._usersBrut) {
    //       let user:Utilisateur = <Utilisateur>{};
    //       user.sexe   = u.gender == 'male' ? 1 : 2;
    //       user.prenom = u.name.first;
    //       user.nom    = u.name.last;
    //       user.ville  = u.location.city;
    //       user.mail   = u.email;
    //       user.ddn    = u.dob.date;
    //       user.photo  = u.picture.thumbnail;
    //       console.log("for: user net = ", user);
          
    //       this._users.push(user);
    //     }
    //   }
    
}