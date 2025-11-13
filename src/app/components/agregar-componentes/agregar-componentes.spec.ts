import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComponentes } from './agregar-componentes';

describe('AgregarComponentes', () => {
  let component: AgregarComponentes;
  let fixture: ComponentFixture<AgregarComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarComponentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarComponentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
