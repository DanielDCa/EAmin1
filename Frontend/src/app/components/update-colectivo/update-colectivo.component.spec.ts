import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColectivoComponent } from './update-colectivo.component';

describe('UpdateColectivoComponent', () => {
  let component: UpdateColectivoComponent;
  let fixture: ComponentFixture<UpdateColectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateColectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
