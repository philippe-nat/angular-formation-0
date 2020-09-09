import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';

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
        
        // requête HTTP get sur randomuser. Retourne un observable (pas de souscription)
        if (typeof(this.nbDemande) != 'undefined')
            this.urlGet += ("?results=" + this.nbDemande);
        console.log("url = ", this.urlGet);
        return this.httpc.get(this.urlGet);
    }
}