import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder } from '@angular/forms';

const EMAIL_REGEXP  = '^([a-zA-Z0-9_\\.-]+)@([a-zA-Z0-9_\\.-]+)\\.([a-zA-Z]{2,5})$';

@Component({
  selector: 'nat-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  private _formulaire: FormGroup;
  private _age:number = undefined;
   
  public get formulaire(): FormGroup {return this._formulaire;}
  public set formulaire(value: FormGroup) {this._formulaire = value;}

  // constructor(private _formBuilder:FormBuilder) {
    // this._formBuilder = _formBuilder;
  //  }

  ngOnInit(): void {
    let dateN:Date = new Date(); //.toLocaleDateString();
    dateN.setFullYear(2000);
    this._age = (Date.now() - dateN.getTime()) / (86400000 * 365.25);
    console.log(dateN.toLocaleDateString());
    let z = Validators.pattern(EMAIL_REGEXP);
    console.log(typeof(z));
    console.log(z);
        
    this.formulaire = new FormGroup({
      sexe  : new FormControl('homme'),
      prenom: new FormControl('Toto', Validators.required),
      nom   : new FormControl(''),
      dateN : new FormControl(dateN.toLocaleDateString(),  this.valideDate),
      mail  : new FormControl('', Validators.compose([
        Validators.pattern(EMAIL_REGEXP),
        Validators.required
        ])
      )
    });
  }

  public traiteFormulaire(donnees:any) {
    console.log("formulaire soumis :", donnees);
  }

  private valideDate(controle:FormControl):null|Object {
    let dateN:Date = new Date(controle.value);
    let resultat:Object | null = null;
    
    let age:number = (Date.now() - dateN.getTime()) / (86400000 * 365.25);
    console.log("    date = ", controle.value, "age =", age);
    
    if (age < 18) resultat = {"valeur" : "La personne doit être majeure"};
    if (age > 99) resultat = {"valeur" : "La personne ne doit pas être centenaire"};
    return resultat;
  }
}
