import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MueblePage } from '../mueble/mueble';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  muebles=[];
  mueblepage= MueblePage;
search=SearchPage;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.http.get('/v1/nga/api/v1/public/klfst?&category=8020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        console.log(JSON.stringify(data));
        if (data.hasOwnProperty("list_ads")){
          this.muebles=data['list_ads'];
          //this.http=data.list_ads;
        }
      },
      error=>{
        console.log(JSON.stringify(error));
      });
    }
    vermueble(mueble)
    {
      this.navCtrl.push(this.mueblepage, {mueble:mueble});
    }
    buscar()
    {
      this.navCtrl.push(this.search,{muebles:this.muebles});
    }

  }


