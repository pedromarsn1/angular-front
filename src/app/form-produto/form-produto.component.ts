import { Component, OnInit } from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UnidadeService } from '../shared/service/unidade.service';
import { GrupoService } from '../shared/service/grupo.service';
import { Unidade } from '../unidade/unidade.model';
import { Grupo } from '../grupo/grupo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent implements OnInit {
 public produtoForm!: FormGroup;

  produtos: Produto []= []
  unidades : Unidade[] = [{
    idUnidade: 1,
    nomeUnidade: "UN"
  },
  {
  idUnidade : 5,
  nomeUnidade : "PC"
  }]

  grupos : Grupo[] = [{
    idGrupo : 5,
    nomeGrupo : "Nestlé"
  },{
    idGrupo : 6,
    nomeGrupo : "Piracanjuba"
  }]

  constructor(
    private fb: FormBuilder,
    public produtoService : ProdutoService,
    public unidadeService : UnidadeService,
    public grupoService : GrupoService,
    private router : Router) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      _id : ["", [Validators.required]],
      codProduto: ["", [Validators.required]],
      quantidade: ["", [Validators.required]],
      grupo: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      unidade: ["", [Validators.required]]

    })

    this.unidadeService.getAll().subscribe(dados => this.unidades = dados)
    this.grupoService.getAll().subscribe(dados =>this.grupos = dados)

  }


  createProduto(){
    this.produtoService.saveProduto(this.produtoForm.value).subscribe(()=>{
      ((result: any) => result)
      this.router.navigate(['/table-prod'])
    })

    this.produtoForm.reset();
  }

}

