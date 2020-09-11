import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserManagerService } from '../services/user-manager.service';
import { Utilisateur } from '../structures/utilisateur';

@Component({
  selector: 'nat-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private _currentUserName: string;
  public get currentUserName(): string {return this._currentUserName;}
  public set currentUserName(value: string) {this._currentUserName = value;}

  private _currentUser: Utilisateur;
  public get currentUser(): Utilisateur {return this._currentUser;}
  public set currentUser(value: Utilisateur) {this._currentUser = value;}

  constructor(private route:ActivatedRoute, private um:UserManagerService) { 
    this._currentUserName = "";
  }

  ngOnInit(): void {
    // console.log("user-details:ngOnInit()");
    
    this.route.params.subscribe(
      (p:Params) => {
        this.currentUserName = p["nomUser"];
        this._currentUser = this.um.getUserByLogin(this.currentUserName);
        console.log("utilisateur courant : ", this._currentUser);
        
      }
    );
    // this.currentUserName = this.route.snapshot.params["nomUser"];
  }
}
