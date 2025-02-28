import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElementComponent } from './header-element.component';

describe('HeaderElementComponent', () => {
  let component: HeaderElementComponent;
  let fixture: ComponentFixture<HeaderElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
