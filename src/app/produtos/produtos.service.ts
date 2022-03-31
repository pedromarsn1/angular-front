import {Produto} from "./produto/produto.model";

export class ProdutosService {
  constructor(){}

  prod : Produto [] = [{
    _id : 1232,
    codProduto: 45665,
    quantidade: 155,
    grupo: "Salgados",
    nome: "Doritos",
    unidade: "UN"
  },
    {
      _id : 8563,
      codProduto: 1236,
      quantidade: 85,
      grupo: "Salgados",
      nome: "Calabokitos",
      unidade: "UN"
    }]

  produtos() : Produto[]{
    return this.prod
  }

}
