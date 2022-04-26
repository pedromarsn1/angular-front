import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Produto } from '../produtos/produto/produto.model';
import { ProdutoService } from '../shared/service/produto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosComponent } from '../produtos/produtos.component';


@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
  preserveWhitespaces: true,
})
export class TabelaProdutosComponent implements OnInit {
  searchText: any;
  produtos: Produto[] = [];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  message?: string;
  @Input() produtoSelecionado: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private modalService: BsModalService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.produtoService
      .getAll()
      .subscribe((dados) => (this.produtoSelecionado = dados));
    this.produtoService.getAll().subscribe((dados) => (this.produtos = dados));
    this.produtoService.deleteProduto;
  }

  deleteProduto(produto: Produto[]) {
    this.produtoSelecionado = produto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  //ajeitar o delete
  confirmDelete() {
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
