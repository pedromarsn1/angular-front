import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DavItemService } from '../shared/service/davitem.service';
import { ProdutosInseridosService } from '../shared/service/produtos-inseridos.service';
import { DavItem } from './dav-item.model';

@Component({
  selector: 'app-dav-item',
  templateUrl: './dav-item.component.html',
  styleUrls: ['./dav-item.component.scss'],
})
export class DavItemComponent implements OnInit {
  davItens: DavItem[] = [];

  constructor(
    private fb: FormBuilder,
    private produtosInseridosService: ProdutosInseridosService,
    private davitemService: DavItemService
  ) {}

  ngOnInit(): void {
    this.davitemService.getAll().subscribe((dados) => (this.davItens = dados));
    this.produtosInseridosService.deleteProduto;
  }

  gravar() {
  // this.davitemService.updateProduto()
  }

  //gravar() {
  //  this.gravarProdutosService.updateProduto(this.produtoForm.value).subscribe(() //=> {
  //    (result: any) => result;
  //  });
  //
  //  this.router.navigate(['/table-prod'])
  //}
}
