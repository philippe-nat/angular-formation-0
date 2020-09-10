import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../structures/utilisateur';

@Injectable()
export class UserManagerService {
    private _urlGet:string = "https://randomuser.me/api/";
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

    constructor(private httpc:HttpClient) {}

    public getUsers():Observable<any> {
        console.log("service user-manager : chargement de", this.nbDemande, " utilisateurs");
        
        if (typeof(this.nbDemande) != 'undefined')
            this.urlGet += ("?results=" + this.nbDemande);

        return this.httpc
            .get(this.urlGet)
            .pipe(
                map( (resultat:any) => resultat.results )
                ,map( (r:any) => { 
                    console.log("map : res=", r); // tout le tableau est là, ramené d'un seul coup
                    let tabUsers :Utilisateur[] = [];
                    for (let u of r) {
                        let user:Utilisateur = <Utilisateur>{};
                        user.sexe = u.gender == 'male' ? 1 : 2;
                        user.prenom = u.name.first;
                        user.nom    = u.name.last;
                        user.ville  = u.location.city;
                        user.mail   = u.email;
                        user.ddn    = u.dob.date;
                        user.photo = u.picture.thumbnail;
                        tabUsers.push(user);
                    }
                    console.log("map: tableau users = ", tabUsers);
                    return tabUsers;
                })
            )
        ;
    }
}