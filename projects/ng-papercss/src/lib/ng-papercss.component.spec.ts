import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPapercssComponent } from './ng-papercss.component';

describe('NgPapercssComponent', () => {
  let component: NgPapercssComponent;
  let fixture: ComponentFixture<NgPapercssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPapercssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPapercssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
