import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TYComponent } from './ty.component';

describe('TYComponent', () => {
  let component: TYComponent;
  let fixture: ComponentFixture<TYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
