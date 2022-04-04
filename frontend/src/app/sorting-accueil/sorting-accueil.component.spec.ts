import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAccueilComponent } from './sorting-accueil.component';

describe('SortingAccueilComponent', () => {
  let component: SortingAccueilComponent;
  let fixture: ComponentFixture<SortingAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
