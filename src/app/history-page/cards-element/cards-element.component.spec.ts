import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsElementComponent } from './cards-element.component';

describe('CardsElementComponent', () => {
  let component: CardsElementComponent;
  let fixture: ComponentFixture<CardsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
