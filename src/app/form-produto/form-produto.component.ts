import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../produtos/produto/produto.model';
import { ProdutoService } from '../shared/service/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../shared/service/unidade.service';
import { Unidade } from '../unidade/unidade.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { QuantidadeService } from '../shared/service/quantidade.service';
import { Quantidade } from '../quantidade/quantidade.model';
import { ProdutosInseridosService } from '../shared/service/produtos-inseridos.service';
import { ProdutosInseridos } from '../produtos/produto/produtos-inseridos.model';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss'],
})
export class FormProdutoComponent implements OnInit {
  public produtoForm!: FormGroup;
  searchText: any;
  produtos: Produto[] = [];
  unidades: Unidade[] = [];
  quantidades: Quantidade[] = [];
  produtosInseridos: ProdutosInseridos[] = [];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  message?: string;
  @Input() produtoSelecionado: Produto[] = [];

  constructor(
    private fb: FormBuilder,
    public produtoService: ProdutoService,
    public unidadeService: UnidadeService,
    private modalService: BsModalService,
    private quantidadeService: QuantidadeService,
    private produtosInseridosService: ProdutosInseridosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      qtdestocada: ['', [Validators.required]],
      qtdreservada: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
    });

    this.produtosInseridosService
      .getAll()
      .subscribe((dados) => (this.produtosInseridos = dados));
    this.produtoService.getAll().subscribe((dados) => (this.produtos = dados));
    this.unidadeService.getAll().subscribe((dados) => (this.unidades = dados));
    this.quantidadeService
      .getAll()
      .subscribe((dados) => (this.quantidades = dados));
  }

  filterProductByCode(input: any) {
    let produto = this.produtos.filter(
      (produto) => produto.codProduto == input.target.value
    )[0];

    let quantidade = this.quantidades.filter(
      (quantidades) => quantidades.codProd == input.target.value
    )[0];

    this.produtoForm.controls['id'].setValue(produto.id);
    this.produtoForm.controls['nome'].setValue(produto.nome);
    this.produtoForm.controls['unidade'].setValue(produto.unidade);
    this.produtoForm.controls['qtdestocada'].setValue(quantidade.quantidade);
    console.log(produto);
    console.log(quantidade);
  }

  updateProduto() {
    this.produtosInseridosService
      .saveProduto(this.produtoForm.value)
      .subscribe(() => {
        (result: any) => result;
        this.router.navigate(['/form']);
      });

    this.produtoForm.reset();
  }

  deleteProduto(produto: Produto[]) {
    this.produtoSelecionado = produto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  //ajeitar o delete
  confirmDelete(input: any) {
    this.produtoService.deleteProduto(this.produtoSelecionado).subscribe(
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
