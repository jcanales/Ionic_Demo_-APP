import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrabajosPage } from './trabajos.page';

describe('TrabajosPage', () => {
  let component: TrabajosPage;
  let fixture: ComponentFixture<TrabajosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabajosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
