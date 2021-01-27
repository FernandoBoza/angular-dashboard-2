import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCardComponent } from './cc-card.component';

describe('CcCardComponent', () => {
  let component: CcCardComponent;
  let fixture: ComponentFixture<CcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
