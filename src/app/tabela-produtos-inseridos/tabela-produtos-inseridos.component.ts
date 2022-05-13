import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ProdutosInseridos } from '../produtos/produto/produtos-inseridos.model';
import { GravarProdutosService } from '../shared/service/gravar-produtos.service';
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
    private gravarProdutoService: GravarProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtosInseridosForm = this.fb.group({
      id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      qtdEstocada: ['', [Validators.required]],
    });

    this.produtosInseridosService
      .getAll()
      .subscribe((dados) => (this.produtos = dados));
    this.produtosInseridosService.deleteProduto;
  }

  gravar() {
    this.gravarProdutoService
      .updateProduto(this.produtosInseridosForm.value)
      .subscribe(() => {
        (result: any) => result;
      });

    console.log(
      this.gravarProdutoService
        .updateProduto(this.produtosInseridosForm.value)
        .subscribe(() => {
          (result: any) => result;
        })
    );

    this.router.navigate(['/form']);
    this.produtosInseridosForm.reset();
  }

  //onSubmit() {
  //  this.produtosInseridosService
  //    .saveProduto(this.produtoForm.value)
  //    .subscribe(() => {
  //      (result: any) => result;
  //    });

  //  //para descobrir o problema
  //  console.log(
  //    this.produtosInseridosService
  //      .saveProduto(this.produtoForm.value)
  //      .subscribe(() => {
  //        (result: any) => result;
  //      })
  //  );

  //  this.router.navigate(['/form']);
  //  this.produtoForm.reset();
  //}
}
