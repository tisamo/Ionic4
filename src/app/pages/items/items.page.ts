import {Component, OnInit} from '@angular/core';
import {HttpClient, ɵangular_packages_common_http_http_c} from '@angular/common/http';
import {Contact} from '../../../Category';

interface ItemsInterface {
    items: Array<Contact>;
}

@Component({
    selector: 'app-items',
    templateUrl: './items.page.html',
    styleUrls: ['./items.page.scss'],
})
export class ItemsPage {
    items: Contact[] = [];

    constructor(
        private http: HttpClient
    ) {
    }
}
