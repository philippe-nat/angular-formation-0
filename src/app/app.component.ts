import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre:string = 'Composant racine';
  get titre() {return this._titre;}
  // private _infoBulle:string = 'Composant racine';
  // get titre() {return this._titre;}

  // get menu() {return this._menu;}
  // get titreMenu() {return this._titreMenu;}
 
}

