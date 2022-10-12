import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  items: IProdutoCarrinho[] = [];

  constructor() { }

  getCar(){
    return JSON.parse(localStorage.getItem('carrinho') || "");
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.items.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }

  clearCar(){
    this.items = [];
    localStorage.clear();
  }

}
