import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTextoComponent } from './buscador-texto.component';

describe('BuscadorTextoComponent', () => {
  let component: BuscadorTextoComponent;
  let fixture: ComponentFixture<BuscadorTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
