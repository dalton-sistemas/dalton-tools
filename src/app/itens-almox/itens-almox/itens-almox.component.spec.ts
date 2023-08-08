import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensAlmoxComponent } from './itens-almox.component';

describe('ItensAlmoxComponent', () => {
  let component: ItensAlmoxComponent;
  let fixture: ComponentFixture<ItensAlmoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensAlmoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensAlmoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
