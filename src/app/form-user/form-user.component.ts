import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }
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
      // dateN : new FormControl(dateN.toLocaleDateString(), function() {return this.valideDate();}),
      dateN : new FormControl(dateN.toLocaleDateString()),
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

  // private valideDate():boolean {
  //   // console.log("valideDate : date =", this.formulaire.controls );
  //   console.log("valideDate : age =", this._age );
    
  //   return (this._age >= 18 && this._age < 100);
  // }

  
}
