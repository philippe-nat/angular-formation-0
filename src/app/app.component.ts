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
}

