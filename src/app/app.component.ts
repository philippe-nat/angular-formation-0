import { Component } from '@angular/core';

@Component({
  selector: 'formation-app1',
  templateUrl: './app.component.html',
  // template: '<h1>Coucou {{title}} !</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app1';

  methode1() {
    console.log("coucou");
  }
}
