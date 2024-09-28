import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerLinkComponent } from './singer-link.component';

describe('SingerLinkComponent', () => {
  let component: SingerLinkComponent;
  let fixture: ComponentFixture<SingerLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingerLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
