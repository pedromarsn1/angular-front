import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './shared/service/produto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnidadeComponent } from './unidade/unidade.component';
import { GrupoComponent } from './grupo/grupo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    FormProdutoComponent,
    HomeComponent,
    NavbarComponent,
    TabelaProdutosComponent,
    EditarProdutoComponent,
    ProdutosComponent,
    ProdutoComponent,
    UnidadeComponent,
    GrupoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    [MDBBootstrapModule.forRoot()],
    MdbCollapseModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
