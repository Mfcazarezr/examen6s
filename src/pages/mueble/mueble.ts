import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the MueblePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mueble',
  templateUrl: 'mueble.html',
})
export class MueblePage {
  mueble={};
  imgs=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public fav:FavoritosProvider) {
       this.mueble=this.navParams.get('mueble');
       if(this.mueble.ad.hasOwnProperty ('images')){
         this.imgs=this.mueble.ad.images;
       }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MueblePage');
  }
  favoritos (mueble){
    this.fav.addFavoritos(mueble);
  }

}
