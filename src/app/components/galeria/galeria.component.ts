import { Component, OnInit, NgModule } from '@angular/core';
import { NavTabsComponent } from '../navtabs/navtabs.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})

@NgModule({
  declarations: [
    NavTabsComponent
  ]
  })

export class GaleriaComponent implements OnInit {



  constructor() { }

  ngOnInit() {}

}
