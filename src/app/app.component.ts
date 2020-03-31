import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Liturgias',
      url: 'liturgias',
      icon: 'albums'
    },
    {
      title: 'Mis Trabajos',
      url: 'trabajos',
      icon: 'briefcase'
    },
    {
      title: 'Galeria',
      url: 'galeria',
      icon: 'images'
    },
    {
      title: 'Perfil',
      url: 'profile',
      icon: 'body'
    },
    {
      title: 'Pagos',
      url: 'pagos',
      icon: 'card'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navcontroller: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ngOnInit() {
    const path = window.location.pathname.split('home')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
