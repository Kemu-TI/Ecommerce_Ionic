import { ProdutoModel } from './../../app/models/produtoModel';
//import { CarrinhoModel } from './../../app/models/carrinhoModel';
import { CarrinhoProvider } from './../../providers/carrinho/carrinho';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { AcaoCarrinhoEnum } from '../../app/enums/AcaoCarrinhoEnum';

@Component({
  selector: 'quantidade',
  templateUrl: 'quantidade.html'
})
export class QuantidadeComponent implements OnInit {


  numero: number = 0;
  @Input('produto') produto: ProdutoModel;
  @Output() quantidadeAlterada = new EventEmitter();

  constructor(private carrinhoSrv: CarrinhoProvider) {
  }

  ngOnInit(): void {
    this.carrinhoSrv.getCarrinho().subscribe(_ => {
      let quantidadeNoCarrinho = this.carrinhoSrv.getQuantidadeItem(this.produto);
      console.log(quantidadeNoCarrinho);
      this.numero = quantidadeNoCarrinho;
    });
  }


  adicionar() {
    this.numero += 1;
    this.quantidadeAlterada.emit({
      quantidade: this.numero,
      acao: AcaoCarrinhoEnum.Adicionar
    });
  }

  remover() {
    let _valorFinal = this.numero -= 1;
    if (_valorFinal <= 0)
      this.numero = 0;
    this.quantidadeAlterada.emit({
      quantidade: this.numero,
      acao: AcaoCarrinhoEnum.Remover
    });
  }

}
