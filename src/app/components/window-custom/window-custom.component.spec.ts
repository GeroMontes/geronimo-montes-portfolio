import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCustomComponent } from './window-custom.component';

describe('WindowCustomComponent', () => {
  let component: WindowCustomComponent;
  let fixture: ComponentFixture<WindowCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
