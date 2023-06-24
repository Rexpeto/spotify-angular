import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrayerComponent } from './card-prayer.component';

describe('CardPrayerComponent', () => {
  let component: CardPrayerComponent;
  let fixture: ComponentFixture<CardPrayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPrayerComponent]
    });
    fixture = TestBed.createComponent(CardPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
