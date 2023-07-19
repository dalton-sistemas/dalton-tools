import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSintelListComponent } from './notas-sintel-list.component';

describe('NotasSintelListComponent', () => {
  let component: NotasSintelListComponent;
  let fixture: ComponentFixture<NotasSintelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasSintelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasSintelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
