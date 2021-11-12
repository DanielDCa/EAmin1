import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearColectivoComponent } from './crear-colectivo.component';

describe('CrearColectivoComponent', () => {
  let component: CrearColectivoComponent;
  let fixture: ComponentFixture<CrearColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearColectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
