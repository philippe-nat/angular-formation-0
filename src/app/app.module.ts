import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { core } from '@angular/compiler';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { InitCap } from './pipes/initcap.pipe';
import { Boolean2Str } from './pipes/boolean2str.pipe';
import { FormLiensComponent } from './form-liens/form-liens.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LiensService } from './services/liens.services';
import { UserManagerService } from './services/user-manager.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { Sexe2Str } from './pipes/sexe2str.pipe';
import { UserDetailComponent } from './user-detail/user-detail.component';

const appRoutes:Routes = [
  {path:'liste', component:UserListComponent},
  {path:'fiche/:nomUser', component:UserDetailComponent},
  {path:'', pathMatch:"full", redirectTo:"liste"}
];

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    InitCap,
    Boolean2Str,
    Sexe2Str,
    FormLiensComponent,
    FormUserComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LiensService,
    UserManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 