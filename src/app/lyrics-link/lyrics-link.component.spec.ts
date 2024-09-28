import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsLinkComponent } from './lyrics-link.component';

describe('LyricsLinkComponent', () => {
  let component: LyricsLinkComponent;
  let fixture: ComponentFixture<LyricsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricsLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
