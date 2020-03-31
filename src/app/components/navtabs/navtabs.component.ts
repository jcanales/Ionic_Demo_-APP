
import { CommonModule} from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { from } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { RouteReuseStrategy} from '@angular/router';

@Component({
  selector: 'navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss'],
})


export class NavTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}