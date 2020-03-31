import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiturgiasComponent } from './liturgias.component';

describe('LiturgiasComponent', () => {
  let component: LiturgiasComponent;
  let fixture: ComponentFixture<LiturgiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiturgiasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiturgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
