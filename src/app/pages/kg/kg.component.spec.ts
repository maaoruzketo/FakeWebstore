import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KGComponent } from './kg.component';

describe('KGComponent', () => {
  let component: KGComponent;
  let fixture: ComponentFixture<KGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
