import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { identity } from 'rxjs';
import { GravarProdutos } from '../gravar-produtos/gravar-produtos.model';

import { ProdutosInseridos } from '../produtos/produto/produtos-inseridos.model';
import { GravarProdutosService } from '../shared/service/gravar-produtos.service';
import { ProdutosInseridosService } from '../shared/service/produtos-inseridos.service';

@Component({
  selector: 'app-tabela-produtos-inseridos',
  templateUrl: './tabela-produtos-inseridos.component.html',
  styleUrls: ['./tabela-produtos-inseridos.component.scss'],
})
export class TabelaProdutosInseridosComponent implements OnInit {
  produtos: ProdutosInseridos[] = [];
  produtosGrav: GravarProdutos[] = [];
  @ViewChild('deleteModal') deleteModal: any;
  message?: string;
  @Input() produtoSelecionado: ProdutosInseridos[] = [];
  public myForm!: FormGroup;
  deleteModalRef?: BsModalRef;
  produtoDeletar?: ProdutosInseridos;

  constructor(
    private fb: FormBuilder,
    private produtosInseridosService: ProdutosInseridosService,
    private gravarProdutoService: GravarProdutosService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      qtdEstocada: ['', [Validators.required]],
    });

    this.produtosInseridosService
      .getAll()
      .subscribe((dados) => (this.produtos = dados));
    this.produtosInseridosService.deleteProduto;
  }

  gravar(produtosGrav : GravarProdutos[]) {
    this.produtosGrav = produtosGrav;

  // let gravar = this.gravarProdutoService
  //   .updateProduto(this.produtosGrav[].qtdEstocada)
  //   .subscribe(() => {
  //     (result: any) => result;
  //     (response: any) => {
  //       this.produtos = response;
  //     };
  //   });

  // console.log(gravar);

  // this.router.navigate(['/form']);

  // console.log(this.produtosInseridosService.deleteAll(this.produtos));
  }

  deleteProduto(produto: ProdutosInseridos) {
    this.produtoDeletar = produto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  //ajeitar o delete
  confirmDelete(id: any) {
    this.produtosInseridosService
      .deleteProduto(this.produtoDeletar?.id)
      .subscribe(
        (success) => {
          alert('Produto deletado com sucesso' + success);
          this.deleteModalRef?.hide();
        },
        (error) => {
          alert('Não foi possível deletar o produto. Tente mais tarde' + error);
          this.deleteModalRef?.hide();
        }
      );

    this.message = 'Confirmed!';
  }

  declineDelete(): void {
    this.message = 'Declined!';
    this.deleteModalRef?.hide();
  }
}
