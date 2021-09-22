import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCardComponent } from './another-card.component';

describe('AnotherCardComponent', () => {
  let component: AnotherCardComponent;
  let fixture: ComponentFixture<AnotherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
