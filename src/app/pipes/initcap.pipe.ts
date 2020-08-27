import { Pipe } from '@angular/core';

@Pipe({
  name: 'initCap'
})
export class InitCap {
  transform(donnee:string)   {
    let resultat = "";
    if (donnee.length >= 0) {resultat = donnee.charAt(0).toUpperCase();}
    if (donnee.length > 0) {
      resultat += donnee.substring(1).toLowerCase();
    }
    return resultat;
  }
}
