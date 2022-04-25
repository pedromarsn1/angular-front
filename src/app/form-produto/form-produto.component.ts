import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto/produto.model';
import { ProdutoService } from '../shared/service/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../shared/service/unidade.service';
import { GrupoService } from '../shared/service/grupo.service';
import { Unidade } from '../unidade/unidade.model';
import { Grupo } from '../grupo/grupo.model';
import { Router } from '@angular/router';

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
  grupos: Grupo[] = [];

  constructor(
    private fb: FormBuilder,
    public produtoService: ProdutoService,
    public unidadeService: UnidadeService,
    public grupoService: GrupoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      _id: ['', [Validators.required]],
      codProduto: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
    });

    this.produtoService.getAll().subscribe((dados) => (this.produtos = dados));
    this.unidadeService.getAll().subscribe((dados) => (this.unidades = dados));
    this.grupoService.getAll().subscribe((dados) => (this.grupos = dados));
  }

  filterProductByCode(input: any) {
    let produto = this.produtos.filter(
      (produto) => produto.codProduto == input.target.value
    )[0];
    this.produtoForm.controls['nome'].setValue(produto.nome);
    this.produtoForm.controls['unidade'].setValue(produto.unidade);
    this.produtoForm.controls['grupo'].setValue(produto.grupo);
    //this.produtoForm.controls['quantidade'].setValue(produto.quantidade);
    console.log(produto);
  }

  //precisa ser um update
  createProduto() {
    this.produtoService.saveProduto(this.produtoForm.value).subscribe(() => {
      (result: any) => result;
      this.router.navigate(['/table-prod']);
    });

    this.produtoForm.reset();
  }

}
