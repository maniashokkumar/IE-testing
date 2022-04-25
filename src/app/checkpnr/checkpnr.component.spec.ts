import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpnrComponent } from './checkpnr.component';

describe('CheckpnrComponent', () => {
  let component: CheckpnrComponent;
  let fixture: ComponentFixture<CheckpnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
