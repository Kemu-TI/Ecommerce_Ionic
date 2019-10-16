import { Component } from '@angular/core';

@Component({
  selector: 'quantidade',
  templateUrl: 'quantidade.html'
})
export class QuantidadeComponent {

  numero: number = 1;

  constructor() {
  }

  adicionar() {
    this.numero += 1;
  }

  remover() {
    let _valorFinal = this.numero -= 1;
    if (_valorFinal <= 0)
      this.numero = 1;
  }

}
