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
    // this.ajouterLien.emit(donneesFormulaire);
  }
}
