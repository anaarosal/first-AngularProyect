import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPersonajesComponent } from './grid-personajes.component';

describe('GridPersonajesComponent', () => {
  let component: GridPersonajesComponent;
  let fixture: ComponentFixture<GridPersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
