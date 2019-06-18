import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../Category';
import {ActivatedRoute} from '@angular/router';
import {ItemServiceService} from '../../Services/item-service.service';
import {debug} from 'util';
import {ZoldsegszervízService} from '../../Services/zoldsegszervíz.service';


@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
    public items: Contact[] = [];
    private itemIndex: number;
    searchKey: string;

    constructor(private route: ActivatedRoute,
                private itemServiceService: ItemServiceService,
                private service: ZoldsegszervízService) {
    }

    initItems() {
        this.items = [
            {
                id: '1',
                image: 'http://4.bp.blogspot.com/-H8S1ZkB2qdk/UJPed7QzWPI/AAAAAAAAA4w/zS85iEKwwmk/s1600/narancs.jpg',
                label: 'Narancs',
                text: 'A narancs vagy édes narancs (Citrus sinensis), népies neve auranci, oránzs déligyümölcs a citrusformák alcsaládjából.'
            },
            {
                id: '2',
                image: 'http://4.bp.blogspot.com/-H8S1ZkB2qdk/UJPed7QzWPI/AAAAAAAAA4w/zS85iEKwwmk/s1600/narancs.jpg',
                label: 'Narancs',
                text: 'A narancs vagy édes narancs (Citrus sinensis), népies neve auranci, oránzs déligyümölcs a citrusformák alcsaládjából.'
            },
            {
                id: '3',
                image: 'https://gyorgytea.hu/wp-content/uploads/2012/02/mezei_zsurlo_w-300x244.png',
                label: 'Mezei',
                text: 'yy'
            },
            {
                id: '4',
                image: 'http://4.bp.blogspot.com/-H8S1ZkB2qdk/UJPed7QzWPI/AAAAAAAAA4w/zS85iEKwwmk/s1600/narancs.jpg',
                label: 'Narancs',
                text: 'A narancs vagy édes narancs (Citrus sinensis), népies neve auranci, oránzs déligyümölcs a citrusformák alcsaládjából.'
            },
            {
                id: '5',
                image: 'http://4.bp.blogspot.com/-H8S1ZkB2qdk/UJPed7QzWPI/AAAAAAAAA4w/zS85iEKwwmk/s1600/narancs.jpg',
                label: 'Narancs',
                text: 'A narancs vagy édes narancs (Citrus sinensis), népies neve auranci, oránzs déligyümölcs a citrusformák alcsaládjából.'
            },
            {
                id: '6',
                image: 'https://gyorgytea.hu/wp-content/uploads/2012/02/mezei_zsurlo_w-300x244.png',
                label: 'Mezei',
                text: 'yy'
            }];
    }


    updateList() {
        const key = this.searchKey.trim().toLowerCase();
        if (key === '') {
            this.initItems();
        } else {
            this.items = this.items.filter(x => x.label.toLowerCase().indexOf(key) !== -1);
            if (this.items.length < 1) {
               this.showhidden();
            }
        }
    }

    getItem(id): Contact {
        const relevantItem = this.items[id];
        this.itemServiceService.lastSelected = relevantItem;
        console.log(relevantItem.label);
        return relevantItem;
    }
    showhidden() {
      const element = document.getElementById('hiddenimage');
      element.style.visibility = 'visible';
    }
    ngOnInit() {
        this.initItems();
        this.itemIndex = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        // todo get itemByItemIndex
    }
}
