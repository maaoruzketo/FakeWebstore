import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WONDComponent } from './wond.component';

describe('WONDComponent', () => {
  let component: WONDComponent;
  let fixture: ComponentFixture<WONDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WONDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WONDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
