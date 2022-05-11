import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravarProdutosComponent } from './gravar-produtos.component';

describe('GravarProdutosComponent', () => {
  let component: GravarProdutosComponent;
  let fixture: ComponentFixture<GravarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
