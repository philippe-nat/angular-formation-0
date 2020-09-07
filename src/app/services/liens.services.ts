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
            {url:"https://www.bing.fr",   intitule:"bing",   actif:false}
          ];
    }

    traceEnable():void {
        for (let i of this._items)
            console.log("item", i.intitule, ":", i.actif);
        this.traceItems();
    }
    
    traceItems():void {
        console.log("Liste des items :");
        
        for (let i of this._items)
            console.log("item", i);
    }

    enableAll():void {
        for (let i of this._items)
            i.actif = true;
        this.traceEnable();
    }

    disableAll():void {
        for (let i of this._items)
            i.actif = false;
        this.traceEnable();
    }

    add(t:ItemMenu):void {
        console.log("add lien");
        if (t.url != "" && t.intitule != "" ) {
            console.log("push");
            t.actif = true;
            this._items.push(t);
            // console.log("items : ", this._items);
            this.traceItems();
        }
    }
    modify(index:number, t:ItemMenu):void {
        console.log("modifier le lien");
        if (t.url != "" && t.intitule != "" ) {
            console.log("modif");
            t.actif = true;
            this._items[index] = t;
            console.log("items : ", this._items);
        }
    }

} 