import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditApplicationPage } from './edit-application.page';

describe('EditApplicationPage', () => {
  let component: EditApplicationPage;
  let fixture: ComponentFixture<EditApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
