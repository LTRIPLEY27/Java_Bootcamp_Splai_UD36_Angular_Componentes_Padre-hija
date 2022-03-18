import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNUMERICO2Component } from './selector-numerico2.component';

describe('SelectorNUMERICO2Component', () => {
  let component: SelectorNUMERICO2Component;
  let fixture: ComponentFixture<SelectorNUMERICO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorNUMERICO2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorNUMERICO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
