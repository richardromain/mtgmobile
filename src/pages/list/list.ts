import { Component } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  cards: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.cards = this.getCards();

    console.log(this.cards);

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  getCards() {
    return this.http.get('http://localhost:8000/api/docs').map(res => res.json());
  }
}
