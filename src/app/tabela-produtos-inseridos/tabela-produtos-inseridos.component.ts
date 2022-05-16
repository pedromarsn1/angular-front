import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  public myForm!: FormGroup;
  deleteModalRef?: BsModalRef;

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

  gravar() {
    this.gravarProdutoService.updateProduto(this.myForm.value).subscribe(() => {
      (result: any) => result;
      (response: any) => {
        this.produtos = response;
      };
    });

    console.log(
      this.gravarProdutoService
        .updateProduto(this.myForm.value)
        .subscribe(() => {
          (result: any) => result;
        })
    );

    this.router.navigate(['/form']);
    this.myForm.reset();
  }

  deleteProduto(produto: ProdutosInseridos[]) {
    this.produtoSelecionado = produto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  //ajeitar o delete
  confirmDelete(input: any) {
    this.produtosInseridosService
      .deleteProduto(this.produtoSelecionado)
      .subscribe(
        (success) => {
          alert('Produto deletado com sucesso');
          this.deleteModalRef?.hide();
        },
        (error) => {
          alert('Não foi possível deletar o produto. Tente mais tarde');
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
