import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFontesComponent } from './buscador-fontes.component';

describe('BuscadorFontesComponent', () => {
  let component: BuscadorFontesComponent;
  let fixture: ComponentFixture<BuscadorFontesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorFontesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorFontesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
