import { Injectable } from '@angular/core';
import {Categories} from '../Models/Categories';
import {Contact} from '../../Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  fajta: number[];
  filteredList: Contact[];
}
