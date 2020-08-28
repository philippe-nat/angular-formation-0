import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { core } from '@angular/compiler';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { InitCap } from './pipes/initcap.pipe';
import { Boolean2Str } from './pipes/boolean2str.pipe';
import { FormLiensComponent } from './form-liens/form-liens.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    InitCap,
    Boolean2Str,
    FormLiensComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 