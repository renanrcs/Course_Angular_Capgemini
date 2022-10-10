import { ProdutosService } from './../produtos.service';
import { produtos, IProduto } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

}
