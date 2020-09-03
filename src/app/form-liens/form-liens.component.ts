import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ItemMenu} from '../structures/itemmenu';
import { LiensService } from '../services/liens.services';

@Component({
  selector: 'nat-form-liens',
  templateUrl: './form-liens.component.html',
  styleUrls: ['./form-liens.component.css']
})
export class FormLiensComponent implements OnInit {
  // @Output() ajouterLien = new EventEmitter();

  constructor(private liens:LiensService) {}
  ngOnInit(): void {}

  soumetLien(donneesFormulaire:ItemMenu):void {
    console.log("form:soumission du lien : ", donneesFormulaire);
    this.liens.add(donneesFormulaire);
    // this.liens.modify(0, donneesFormulaire);
    // this.ajouterLien.emit(donneesFormulaire);
  }

  desactiverItems() {
    console.log("formlien: désactiver les items");
    this.liens.disableAll();
    // this.srvItem.disableAll();
  }
  ajouterItem() {
    console.log("formlien : ajouterItem");
    this.liens.add({url:"www.oracle.com", intitule:"oracle", actif:true});
  }

  modifierItem() {
    console.log("formlien : modifierItem");
    this.liens.modify(0, {url:"www.oracle.com", intitule:"oracle", actif:true});
  }
  listerItems() {
    console.log("formlien : ListerItem");
    this.liens.traceItems();
  }

}
