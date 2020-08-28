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
   
  public get formulaire(): FormGroup {return this._formulaire;}
  public set formulaire(value: FormGroup) {this._formulaire = value;}

  constructor() { }
  ngOnInit(): void {
    let dateN:Date = new Date(); //.toLocaleDateString();
    dateN.setFullYear(2000);
    console.log(dateN.toLocaleDateString());
    
    this.formulaire = new FormGroup({
      sexe  : new FormControl('homme'),
      prenom: new FormControl('Toto'),
      nom   : new FormControl(),
      dateN : new FormControl(dateN.toLocaleDateString()),
      mail  : new FormControl('', Validators.pattern(EMAIL_REGEXP))
    });
  }

  public traiteFormulaire(donnees:any) {
    console.log("formulaire soumis :", donnees);
  }

}
