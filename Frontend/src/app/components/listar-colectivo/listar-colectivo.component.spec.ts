import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarColectivoComponent } from './listar-colectivo.component';

describe('ListarColectivoComponent', () => {
  let component: ListarColectivoComponent;
  let fixture: ComponentFixture<ListarColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarColectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
