import { Injectable } from '@angular/core';
import {HomeCategories} from '../Modells/HomeCategories';
import {Contact} from '../../Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryarrayserviceService {

  constructor() { }
  fajta: number[];
  filteredList: Contact[];
}
