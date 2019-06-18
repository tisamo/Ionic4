import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from "../../Services/item-service.service";
import {Contact} from "../../../Category";

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.page.html',
  styleUrls: ['./itemview.page.scss'],
})
export class ItemviewPage implements OnInit {
  item: Contact=this.itemService.lastSelected;

  constructor(private itemService: ItemServiceService) { }

  ngOnInit() {

  }

}
