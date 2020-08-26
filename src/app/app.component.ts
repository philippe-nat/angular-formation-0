import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import {Titre} from '../core';


@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre:Titre = {valeur:"menu", infoBulle:"menu latéral"};
  
  get titre() {return this._titre;}
  set titre(t:Titre) {this._titre = t;}
}

