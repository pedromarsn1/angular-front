import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProdutosInseridos } from '../produtos/produto/produtos-inseridos.model';
import { ProdutosInseridosService } from '../shared/service/produtos-inseridos.service';

@Component({
  selector: 'app-tabela-produtos-inseridos',
  templateUrl: './tabela-produtos-inseridos.component.html',
  styleUrls: ['./tabela-produtos-inseridos.component.scss'],
})
export class TabelaProdutosInseridosComponent implements OnInit {
  searchText: any;
  produtos: ProdutosInseridos[] = [];
  @ViewChild('deleteModal') deleteModal: any;
  message?: string;
  @Input() produtoSelecionado: ProdutosInseridos[] = [];
  public produtosInseridosForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtosInseridosService: ProdutosInseridosService,
  ) {}

  ngOnInit(): void {
    this.produtosInseridosForm = this.fb.group({
      id: ['', [Validators.required]],
    });

    this.produtosInseridosService
      .getAll()
      .subscribe((dados) => (this.produtos = dados));
    this.produtosInseridosService.deleteProduto;
  }

}
