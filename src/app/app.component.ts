import { Component } from '@angular/core';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _titre = 'Composant racine';
  get titre() {return this._titre;}

  methode1() {
    console.log("coucou");
  }
}
