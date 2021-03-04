import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInterviewPage } from './add-interview.page';

describe('AddInterviewPage', () => {
  let component: AddInterviewPage;
  let fixture: ComponentFixture<AddInterviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
