import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomsComponent } from './grooms.component';

describe('GroomsComponent', () => {
  let component: GroomsComponent;
  let fixture: ComponentFixture<GroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
