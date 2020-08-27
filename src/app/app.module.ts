import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { core } from '@angular/compiler';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { InitCap } from './pipes/initcap.pipe';
import { Boolean2Str } from './pipes/boolean2str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    InitCap,
    Boolean2Str
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
