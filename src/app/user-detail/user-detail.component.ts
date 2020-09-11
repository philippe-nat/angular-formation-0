import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'nat-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private _currentUserName: string;
  public get currentUserName(): string {return this._currentUserName;}
  public set currentUserName(value: string) {this._currentUserName = value;}

  constructor(private route:ActivatedRoute) { 
    this._currentUserName = "";
  }

  ngOnInit(): void {
    console.log("user-details:ngOnInit()");
    
     this.currentUserName = this.route.snapshot.params["nomUser"];
  }
}
