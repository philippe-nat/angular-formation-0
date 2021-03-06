import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Utilisateur } from '../structures/utilisateur';

@Injectable()
export class UserManagerService {
    private _urlGet:string = "https://randomuser.me/api/";
    public get urlGet():string {return this._urlGet;}
    public set urlGet(value:string) {this._urlGet = value;}

    private _requeteGet:string = this.urlGet;
    private _tabUsers :Utilisateur[] = [];
    
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
            this._requeteGet = this.urlGet + ("?results=" + this.nbDemande);
        
        console.log("url de la requete :", this._requeteGet);

        return this.httpc
            .get(this._requeteGet)
            .pipe(
                map( (resultat:any) => resultat.results )
                ,map( (r:any) => { 
                    console.log("map : taille du tableau = ", r.length, "res=", r); // tout le tableau est là, ramené d'un seul coup
                    // let tabUsers :Utilisateur[] = [];
                    for (let u of r) {
                        let user:Utilisateur = <Utilisateur>{};
                        user.sexe = u.gender == 'male' ? 1 : 2;
                        user.prenom = u.name.first;
                        user.nom    = u.name.last;
                        user.ville  = u.location.city;
                        user.mail   = u.email;
                        user.ddn    = u.dob.date;
                        user.photo  = u.picture.thumbnail;
                        user.login  = u.login.username;
                        user.photoGrande = u.picture.large;
                        user.longitude = parseFloat(u.location.coordinates.longitude);
                        user.latitude  = parseFloat(u.location.coordinates.latitude);
                        // tabUsers.push(user);
                        this._tabUsers.push(user);
                    }
                    //console.log("map: tableau users = ", tabUsers);
                    console.log("map: tableau users = ", this._tabUsers);
                    //return tabUsers;
                    return this._tabUsers;
                })
                ,delay(0)
            )
        ;
    }

    public getUserByLogin(login:string):Utilisateur|undefined {
        if (login == undefined || login.length == 0) return undefined;
        console.log("getUserByLogin");
        let user:Utilisateur = this._tabUsers.find( (u) => u.login === login );
        // console.log("utilisateur courant : ", user);
        return user;
    }
}