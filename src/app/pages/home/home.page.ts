import { Component, OnInit, NgModule } from '@angular/core';
import { NavTabsComponent } from '../../components/navtabs/navtabs.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@NgModule ({
  declarations: [NavTabsComponent]

})

export class HomePageModule {}


