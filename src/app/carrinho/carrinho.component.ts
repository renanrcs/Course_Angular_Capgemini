import { Router } from '@angular/router';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getCar();
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  comprar(){
    alert(`Parabéns, você finalizou a sua compra!`);
    this.carrinhoService.clearCar();
    this.router.navigate(["produtos"]);
  }

  removeProductCar(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removeProductCar(produtoId);
    this.calculateTotal();
  }

}
