import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioTotvsComponent } from './dicionario-totvs.component';

describe('DicionarioTotvsComponent', () => {
  let component: DicionarioTotvsComponent;
  let fixture: ComponentFixture<DicionarioTotvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioTotvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicionarioTotvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
