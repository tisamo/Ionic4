import {Component} from '@angular/core';
import {
    NavController,
    AlertController,
    MenuController,
    ToastController,
    PopoverController,
    ModalController
} from '@ionic/angular';

// Modals
import {SearchFilterPage} from '../../pages/modal/search-filter/search-filter.page';
import {ImagePage} from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import {NotificationsComponent} from './../../components/notifications/notifications.component';
import {Categories} from '../../Models/Categories';
import {Contact} from '../../../Category';
import {CategoryService} from '../../Services/categoryarrayservice.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular-devkit/schematics';


interface CategoriesRo {
    categories: Array<Categories>;
}

interface Everyitem {
    items: Array<Contact>;
}

@Component({
    selector: 'app-home-results',
    templateUrl: './home-results.page.html',
    styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
    searchKey = '';
    yourLocation = '123 Test Street';
    themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
    items: Categories[] = [];
    //  everyItems: Contact[] = [];
    everyItems: any;


    constructor(public navCtrl: NavController,
                public menuCtrl: MenuController,
                public popoverCtrl: PopoverController,
                public alertCtrl: AlertController,
                public modalCtrl: ModalController,
                public toastCtrl: ToastController,
                private categservice: CategoryService,
                private http: HttpClient) {
        this.initItems();

        this.http.get('assets/items.json').subscribe((response: Everyitem) => {
            this.everyItems = response.items;
        });
    }
    filterItemsByIndex(index) {
        const selected = this.items[index];
        const filteredList = this.everyItems.filter(
            function (e) {
                return this.indexOf(e) < 0;
            }, selected.categoryIds);
        this.categservice.filteredList = filteredList;
    }

    initItems() {
        this.http.get('assets/categories.json').subscribe((response: CategoriesRo) => {
            this.items = response.categories;
            console.log(this.items[0].image);
        });
    }

    searchInList() {
        const key = this.searchKey.trim().toLowerCase();
        if (key === '') {
            this.initItems();
        } else {
            this.items = this.items.filter(x => x.name.toLowerCase().indexOf(key) !== -1);
        }
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }

    settings() {
        this.navCtrl.navigateForward('settings');
    }

    async alertLocation() {
        const changeLocation = await this.alertCtrl.create({
            header: 'Change Location',
            message: 'Type your Address.',
            inputs: [
                {
                    name: 'location',
                    placeholder: 'Enter your new Location',
                    type: 'text'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Change',
                    handler: async (data) => {
                        console.log('Change clicked', data);
                        this.yourLocation = data.location;
                        const toast = await this.toastCtrl.create({
                            message: 'Location was change successfully',
                            duration: 3000,
                            position: 'top',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });

                        toast.present();
                    }
                }
            ]
        });
        changeLocation.present();
    }

    async searchFilter() {
        const modal = await this.modalCtrl.create({
            component: SearchFilterPage
        });
        return await modal.present();
    }

    async presentImage(image: any) {
        const modal = await this.modalCtrl.create({
            component: ImagePage,
            componentProps: {value: image}
        });
        return await modal.present();
    }

    async notifications(ev: any) {
        const popover = await this.popoverCtrl.create({
            component: NotificationsComponent,
            event: ev,
            animated: true,
            showBackdrop: true
        });
        return await popover.present();
    }


}
