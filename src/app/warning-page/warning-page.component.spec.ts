import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningPageComponent } from './warning-page.component';

describe('WarningPageComponent', () => {
  let component: WarningPageComponent;
  let fixture: ComponentFixture<WarningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
