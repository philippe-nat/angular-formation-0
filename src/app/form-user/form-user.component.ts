import { Component, OnInit } from '@angular/core';
import { /*FormGroup, FormControl,*/ Validators, ValidatorFn, FormBuilder } from '@angular/forms';

const EMAIL_REGEXP  = '^([a-zA-Z0-9_\\.-]+)@([a-zA-Z0-9_\\.-]+)\\.([a-zA-Z]{2,5})$';

@Component({
  selector: 'nat-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  //private _formulaire: FormGroup;
  private _formulaire: any;
  private _age:number = undefined;
   
  // public get formulaire(): FormGroup {return this._formulaire;}
  // public set formulaire(value: FormGroup) {this._formulaire = value;}
  public get formulaire() {return this._formulaire;}
  public set formulaire(value) {this._formulaire = value;}

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    let dateN:Date = new Date(); //.toLocaleDateString();
    dateN.setFullYear(2000);
    this._age = (Date.now() - dateN.getTime()) / (86400000 * 365.25);
    console.log(dateN.toLocaleDateString());
    let z = Validators.pattern(EMAIL_REGEXP);
    // console.log(typeof(z));
    // console.log(z);
        
    // this.formulaire = new FormGroup({
      this.formulaire = this._fb.group({
      /*sexe  : new FormControl('homme'),*/
      sexe: this._fb.control('homme'),
      // prenom: new FormControl('Toto', Validators.required),
      // nom   : new FormControl(''),
      // dateN : new FormControl(dateN.toLocaleDateString(),  this.valideDate),
      // mail  : new FormControl('', Validators.compose([
      prenom: this._fb.control('Toto', Validators.required),
      nom   : this._fb.control(''),
      dateN : this._fb.control(dateN.toLocaleDateString(),  this.valideDate),
      mail  : this._fb.control ('', Validators.compose([
        Validators.pattern(EMAIL_REGEXP),
        Validators.required
        ])
      )
    });
  }

  public traiteFormulaire(donnees:any) {
    console.log("formulaire soumis :", donnees);
  }

  // private valideDate(controle:FormControl):null|Object {
    private valideDate(controle):null|Object {
      console.log("valideDate : typeof(controle) =", typeof(controle), ", controle = ", controle);
      
    let dateN:Date = new Date(controle.value);
    let resultat:Object | null = null;
    
    let age:number = (Date.now() - dateN.getTime()) / (86400000 * 365.25);
    console.log("    date = ", controle.value, "age =", age);
    
    if (age < 18) resultat = {"valeur" : "La personne doit être majeure"};
    if (age > 99) resultat = {"valeur" : "La personne ne doit pas être centenaire"};
    return resultat;
  }
}
