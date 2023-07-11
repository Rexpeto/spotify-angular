import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { FormsModule } from '@angular/forms';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HistoryPageComponent,
        HomePageComponent,
        SearchComponent,
        PlayListBodyComponent,
        OrderListPipe,
      ],
      imports: [HttpClientTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
