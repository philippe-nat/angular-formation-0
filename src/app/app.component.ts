import { Component } from '@angular/core';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre:string = 'Composant racine';
  get titre() {return this._titre;}

  private _menu = {
    titre:"titre menu",
    infoBulle:"C'est le titre du menu"
  };
  get menu() {return this._menu;}
 
}

