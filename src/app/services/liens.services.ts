import {ItemMenu} from '../structures/itemmenu'
import { Injectable } from '@angular/core';

// @Injectable()
export class LiensService {
    private _items:ItemMenu[];

    get items() { return [...this._items]; }
    // set items(t:ItemMenu[]) { this._items = t; }
  
    constructor() {
        this._items = [
            {url:"https://www.google.fr", intitule:"google", actif:true},
            {url:"https://www.bing.fr", intitule:"bing", actif:false}
          ];
    }

    add(t:ItemMenu):void {
        console.log("add lien");
        if (t.url != "" && t.intitule != "" ) {
            console.log("push");
            this._items.push(t);
            console.log("items : ", this._items);
        }
    }
} 