import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDescriptionComponent } from './anime-description.component';

describe('AnimeDescriptionComponent', () => {
  let component: AnimeDescriptionComponent;
  let fixture: ComponentFixture<AnimeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
