import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEbitComponent } from './team-ebit.component';

describe('TeamEbitComponent', () => {
  let component: TeamEbitComponent;
  let fixture: ComponentFixture<TeamEbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamEbitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
