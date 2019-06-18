import { Injectable } from '@angular/core';

interface Item {
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  lastSelected;

  private _items: Array<Item>;
  constructor() {}
  get items(): Array<Item> {
    return this._items;
  }

  set items(value: Array<Item>) {
    this._items = value;
  }
}
