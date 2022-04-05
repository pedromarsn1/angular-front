import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import {HttpClientModule} from "@angular/common/http";
import {ProdutoService} from "./shared/service/produto.service";


@NgModule({
  declarations: [
    AppComponent,
    FormProdutoComponent,
    HomeComponent,
    NavbarComponent,
    TabelaProdutosComponent,
    EditarProdutoComponent,
    ProdutosComponent,
    ProdutoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    [MDBBootstrapModule.forRoot()],
    MdbCollapseModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
