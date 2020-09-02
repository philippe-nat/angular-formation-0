import {ItemMenu} from '../structures/itemmenu'

export class LiensService {
    private _items:ItemMenu[];

    get items() { return this._items; }
    set items(t:ItemMenu[]) { this._items = t; }
  
    constructor() {
        this.items = [
            {url:"https://www.google.fr", intitule:"google"},
            {url:"https://www.bing.fr", intitule:"bing"}
          ];
    }
} 