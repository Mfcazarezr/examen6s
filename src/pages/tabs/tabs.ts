import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { HomePage } from '../home/home';
import { VideojuegosPage } from '../videojuegos/videojuegos';
import { TrabajoPage } from '../trabajo/trabajo';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1= HomePage;
tab2= FavoritosPage;
tab3= VideojuegosPage;
tab4=TrabajoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
