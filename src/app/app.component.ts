import { Component } from '@angular/core';

@Component({
  selector: 'formation-root',
  templateUrl: './app.component.html',
  // template: '<h1>Coucou {{title}} !</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app01';

  methode1() {
    console.log("coucou");
  }
}
