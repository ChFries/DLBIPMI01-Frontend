import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSegmentComponent } from './divider-segment.component';

describe('DividerSegmentComponent', () => {
  let component: DividerSegmentComponent;
  let fixture: ComponentFixture<DividerSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
