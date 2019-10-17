import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProdutoModel } from '../../app/models/produtoModel';
import { CarrinhoModel } from '../../app/models/carrinhoModel';
import { CarrinhoItemModel } from '../../app/models/CarrinhoItemModel';

@Injectable()
export class CarrinhoProvider {

  private _carrinho: CarrinhoModel = new CarrinhoModel();
  private carrinho: Observable<CarrinhoModel>;
  private carrinhoObservable: any;

  constructor(public http: HttpClient) {

    //Inicializando nosso carrinho
    this._carrinho.datahora = new Date();

    //Inicializando nosso observable
    this.carrinho = Observable.create(obs => {
      this.carrinhoObservable = obs;
      this.carrinhoObservable.next(this._carrinho);
    });

  }

  public getCarrinho(): Observable<CarrinhoModel> {
    return this.carrinho;
  }

  public adicionarNovoItem(item: ProdutoModel): void {
    let isExiste = false;

    this._carrinho.itens.forEach(prod => {
      if (prod.Produto._id == item._id) {
        prod.Quantidade++;
        isExiste = true;
      }
    });

    if (!isExiste) {
      let newProduto = new CarrinhoItemModel();
      newProduto.Produto = item;
      newProduto.Quantidade = 1;
      this._carrinho.itens.push(newProduto);
    }

    this._calcularCarrinho();
    this.carrinhoObservable.next(this._carrinho);

  }

  public removerItem(item: ProdutoModel): void {
    for (let index = 0; index < this._carrinho.itens.length; index++) {
      const prod = this._carrinho.itens[index];
      if (prod.Produto._id == item._id) {
        if (prod.Quantidade <= 1) {
          this._carrinho.itens.splice(index, 1);
        } else {
          this._carrinho.itens[index].Quantidade--;
        }
      }
    }
    this._calcularCarrinho();
    this.carrinhoObservable.next(this._carrinho);
  }

  public getQuantidadeItem(item: ProdutoModel): number {
    let prod = this._carrinho.itens.filter(x => x.Produto._id == item._id)[0];
    if (prod)
      return prod.Quantidade;
    else
      return 0;
  }

  private _calcularCarrinho(): void {
    this._carrinho.valorTotal = 0;
    this._carrinho.itens.forEach(prod => {
      this._carrinho.valorTotal += (prod.Produto.preco * prod.Quantidade);
    });
  }


}
