import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FormProdutoComponent} from "./form-produto/form-produto.component";
import {TabelaProdutosComponent} from "./tabela-produtos/tabela-produtos.component";
import {EditarProdutoComponent} from "./editar-produto/editar-produto.component";
import { TabelaProdutosInseridosComponent } from "./tabela-produtos-inseridos/tabela-produtos-inseridos.component";

export const ROUTES: Routes = [
  {path : '', component : HomeComponent},
  {path : 'form', component: FormProdutoComponent},
  {path: 'table-prod', component: TabelaProdutosComponent},
  {path: 'editar-prod', component: EditarProdutoComponent},
  {path: 'produtos-inseridos', component: TabelaProdutosInseridosComponent},
]
