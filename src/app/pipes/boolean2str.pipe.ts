import { Pipe } from '@angular/core';

@Pipe({
  name: 'boolean2str'
})
export class Boolean2Str {
  transform(donnee:boolean, mode:string|undefined, short:boolean|undefined)   {
    let resultat = "";
    if (typeof(mode) == 'undefined') mode = 'v/f';
    if (typeof(short) == 'undefined') short = false;
    switch (mode.toLowerCase()) {
      case 'v/f':resultat = donnee? 'VRAI' : 'FAUX'; break;
      case 't/f':resultat = donnee? 'TRUE' : 'FALSE'; break;
      case 'o/o':resultat = donnee? 'ON' : 'OFF'; break;
      case 'o/n':resultat = donnee? 'OUI' : 'NON'; break;
      case 'y/n':resultat = donnee? 'YES' : 'NO'; break;
      case 'a/d':resultat = donnee? 'ACTIF' : 'INACTIF'; break;
      default:
        resultat = donnee? 'OK' : 'KO';
    };
    if(short && mode != 'o/o') resultat = resultat.charAt(0);
    return resultat;
  }
}
