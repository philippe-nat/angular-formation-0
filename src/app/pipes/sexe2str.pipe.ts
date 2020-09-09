import { Pipe } from '@angular/core';

@Pipe({
  name: 'sexe2str'
})
export class Sexe2Str {
  transform(donnee:number, short:boolean|undefined)   {
    let resultat = "";
    if (typeof(short) == 'undefined')
      short = false;

    if (donnee == 1 && !short) resultat = "monsieur";
    if (donnee == 1 &&  short) resultat = "M.";
    if (donnee == 2 && !short) resultat = "madame";
    if (donnee == 2 &&  short) resultat = "Mme";

    return resultat;
  }
}
