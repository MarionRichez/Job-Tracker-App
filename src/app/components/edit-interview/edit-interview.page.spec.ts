import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInterviewPage } from './edit-interview.page';

describe('EditInterviewPage', () => {
  let component: EditInterviewPage;
  let fixture: ComponentFixture<EditInterviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInterviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
