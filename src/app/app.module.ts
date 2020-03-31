import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavTabsComponent } from './components/navtabs/navtabs.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component'; 
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LiturgiasComponent } from './components/liturgias/liturgias.component';
import { TrabajosComponent  } from './components/trabajos/trabajos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent  } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent,
        NavTabsComponent,
        AnunciosComponent,
        GaleriaComponent,
        LiturgiasComponent,
        TrabajosComponent,
        RegistroComponent,
        LoginComponent,
        PerfilComponent,
        PagosComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
