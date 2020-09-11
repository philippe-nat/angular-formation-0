export interface Utilisateur {
    sexe:number;
    prenom:String;
    nom:String;
    ville:string;
    mail:string;
    ddn:Date;
    login:string;
    longitude:number;
    latitude:number;
    photo?:string;
    photoGrande?:string;
}