import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MueblePage } from '../mueble/mueble';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  muebles=[];
  items=[];
  mueblepage=MueblePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.muebles=this.navParams.get('muebles');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getItems(ev:any)
  {
    console.log(ev.target.value);

    this.items=this.muebles.filter(mueble => {
        return mueble.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
      
      
  }
  vermueble(item)
  {
    this.navCtrl.push(this.mueblepage, {mueble:item});
  }

}
