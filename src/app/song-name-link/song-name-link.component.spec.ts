import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongNameLinkComponent } from './song-name-link.component';

describe('SongNameLinkComponent', () => {
  let component: SongNameLinkComponent;
  let fixture: ComponentFixture<SongNameLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongNameLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongNameLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
