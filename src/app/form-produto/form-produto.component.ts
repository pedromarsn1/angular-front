import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../produtos/produto/produto.model';
import { ProdutoService } from '../shared/service/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../shared/service/unidade.service';
import { GrupoService } from '../shared/service/grupo.service';
import { Unidade } from '../unidade/unidade.model';
import { Grupo } from '../grupo/grupo.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProdutosInseridosService } from '../shared/service/produtos-inseridos.service';
import { ProdutosInseridos } from '../produtos/produto/produtos-inseridos.model';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss'],
})
export class FormProdutoComponent implements OnInit {
  public produtoForm!: FormGroup;
  public produtoTableForm!: FormGroup;
  searchText: any;
  produtos: Produto[] = [];
  produtosInseridos: ProdutosInseridos[] = [];
  unidades: Unidade[] = [];
  grupos: Grupo[] = [];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  message?: string;
  @Input() produtoSelecionado: Produto[] = [];


  constructor(
    private fb: FormBuilder,
    public produtoService: ProdutoService,
    public produtosInseridosService: ProdutosInseridosService,
    public unidadeService: UnidadeService,
    private modalService: BsModalService,
    public grupoService: GrupoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
    });

    this.produtoTableForm = this.fb.group({
      id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
    });

    this.produtosInseridosService
      .getAll()
      .subscribe((dados) => (this.produtosInseridos = dados));
    this.produtoService.getAll().subscribe((dados) => (this.produtos = dados));
    this.unidadeService.getAll().subscribe((dados) => (this.unidades = dados));
    this.grupoService.getAll().subscribe((dados) => (this.grupos = dados));
  }

  filterProductByCode(input: any) {
    let produto = this.produtos.filter(
      (produto) => produto.codProduto == input.target.value
    )[0];

    this.produtoForm.controls['id'].setValue(produto.id);
    this.produtoForm.controls['nome'].setValue(produto.nome);
    this.produtoForm.controls['unidade'].setValue(produto.unidade);
    this.produtoForm.controls['grupo'].setValue(produto.grupo);
    console.log(produto);
  }

  updateProduto() {
   this.produtoService.updateProduto(this.produtoForm.value).subscribe(() => {
     (result: any) => result;
     this.router.navigate(['/form']);
    });

    this.produtoForm.reset();
  }

  gravarProdutos() {
    this.produtosInseridosService
      .saveProduto(this.produtoTableForm.value)
      .subscribe(() => {
        (result: any) => result;
        this.router.navigate(['/produtos-inseridos']);
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
    // let produto = this.produtos.filter(
    //  (produto) => produto.id === input.target.value
    // )[0];

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
