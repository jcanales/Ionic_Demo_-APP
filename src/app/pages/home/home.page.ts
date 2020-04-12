import { Component, OnInit, NgModule } from '@angular/core';
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
  declarations: [HomePage]

})

export class HomePageModule {}


