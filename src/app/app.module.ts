import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { MueblePage } from '../pages/mueble/mueble';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { TrabajoPage } from '../pages/trabajo/trabajo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MueblePage,
    SearchPage,
    TabsPage,
    FavoritosPage,
    VideojuegosPage,
    TrabajoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MueblePage,
    SearchPage,
    TabsPage,
    FavoritosPage,
    VideojuegosPage,
    TrabajoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
