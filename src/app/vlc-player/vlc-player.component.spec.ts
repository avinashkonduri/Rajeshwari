import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlcPlayerComponent } from './vlc-player.component';

describe('VlcPlayerComponent', () => {
  let component: VlcPlayerComponent;
  let fixture: ComponentFixture<VlcPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlcPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlcPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
