import { Component, OnInit } from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import { UnidadeService } from '../shared/service/unidade.service';
import { GrupoService } from '../shared/service/grupo.service';
import { Unidade } from '../unidade/unidade.model';
import { Grupo } from '../grupo/grupo.model';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent implements OnInit {
 formProduto : any = FormGroup;

  produto : any;
  produtos: Produto[] = []
  unidades : Unidade[] = []
  grupos : Grupo[] = []

  constructor(
    private fb: FormBuilder,
    public produtoService : ProdutoService,
    public unidadeService : UnidadeService,
    public grupoService : GrupoService) { }

  ngOnInit(): void {
    this.produto = {}
    this.formProduto = this.fb.group({
      _id : ["", [Validators.required]],
      codProduto: ["", [Validators.required]],
      quantidade: ["", [Validators.required]],
      grupo: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      unidade: ["", [Validators.required]]

    })

  }

  saveProduto(){
    this.produtoService.saveProduto(this.produto)
    .then(produto => console.log("Adicionado", produto))
    .catch(error=> console.error(error))

    this.formProduto.reset();
  }

}
