import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthWidgetComponent } from './month-widget.component';

describe('MonthWidgetComponent', () => {
  let component: MonthWidgetComponent;
  let fixture: ComponentFixture<MonthWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
