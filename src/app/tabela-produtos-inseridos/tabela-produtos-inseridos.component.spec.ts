import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProdutosInseridosComponent } from './tabela-produtos-inseridos.component';

describe('TabelaProdutosInseridosComponent', () => {
  let component: TabelaProdutosInseridosComponent;
  let fixture: ComponentFixture<TabelaProdutosInseridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaProdutosInseridosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaProdutosInseridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
