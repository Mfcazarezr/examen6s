import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MueblePage } from '../mueble/mueble';

/**
 * Generated class for the TrabajoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trabajo',
  templateUrl: 'trabajo.html',
})
export class TrabajoPage {
trabajopage=TrabajoPage;
trabajos=[];
mueblepage=MueblePage;
  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.http.get('/v1/nga/api/v1/public/klfst?&category=6020&lim=29&lang=es')
       .subscribe(data =>{
         console.log(JSON.stringify(data));
         if (data.hasOwnProperty('list_ads')){
           this.trabajos=data['list_ads'];
         }
         },error =>{
           console.log(JSON.stringify(error));
         
       });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajoPage');
  }
  vertrabajo(trabajo){
    this.navCtrl.push(this.mueblepage, {mueble:trabajo});
  }

}
