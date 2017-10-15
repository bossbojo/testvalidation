import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfromComponent } from './testfrom.component';

describe('TestfromComponent', () => {
  let component: TestfromComponent;
  let fixture: ComponentFixture<TestfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
