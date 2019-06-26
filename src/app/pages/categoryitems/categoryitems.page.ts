import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../Category';
import {ActivatedRoute} from '@angular/router';
import {ItemServiceService} from '../../Services/item-service.service';
import {debug} from 'util';
import {ZoldsegszervízService} from '../../Services/zoldsegszervíz.service';
import {CategoryService, CategoryService} from '../../Services/categoryservice';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-categoryitems',
    templateUrl: './categoryitems.page.html',
    styleUrls: ['./categoryitems.page.scss'],
})
export class CategoryItemsPage implements OnInit {
    public items: Contact[] = [];
    private itemIndex: number;
    searchKey: string;

    constructor(private route: ActivatedRoute,
                private itemServiceService: ItemServiceService,
                private service: CategoryService,
                private http: HttpClient) {
        this.items = service.filteredList;
    }

    updateList() {
        const key = this.searchKey.trim().toLowerCase();
        if (key === '') {
        } else {
            this.items = this.items.filter(x => x.label.toLowerCase().indexOf(key) !== -1);
        }
    }

    getItem(id): Contact {
        const relevantItem = this.items[id];
        this.itemServiceService.lastSelected = relevantItem;
        return relevantItem;
    }



    ngOnInit() {
        this.itemIndex = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        // todo get itemByItemIndex
    }
}
