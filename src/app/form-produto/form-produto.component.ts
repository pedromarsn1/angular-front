import { Component, OnInit } from '@angular/core';
import {Produto} from "../produtos/produto/produto.model";
import {ProdutoService} from "../shared/service/produto.service";
import {FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent implements OnInit {
  produto : any;
  produtos: Produto[] = []

  constructor( public produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.produto = {}

  }

  saveProduto(frm : NgForm){
    this.produtoService.saveProduto(this.produto)
    .then(produto => console.log("Adicionado", produto))
    .catch(error=> console.error(error)) 
    
    frm.reset();
  }

}
