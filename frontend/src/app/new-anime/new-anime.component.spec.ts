import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnimeComponent } from './new-anime.component';

describe('NewAnimeComponent', () => {
  let component: NewAnimeComponent;
  let fixture: ComponentFixture<NewAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
