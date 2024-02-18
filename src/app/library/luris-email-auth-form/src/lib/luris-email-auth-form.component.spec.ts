import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LurisEmailAuthFormComponent } from './luris-email-auth-form.component';

describe('LurisEmailAuthFormComponent', () => {
  let component: LurisEmailAuthFormComponent;
  let fixture: ComponentFixture<LurisEmailAuthFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LurisEmailAuthFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LurisEmailAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
