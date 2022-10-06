import { Celular } from './../types/Celula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {
      id: 1,
      nome: "Celular XL",
      descricao: "Celular grande",
      esgotado: false
    },
    {
      id: 2,
      nome: "Celular Normal",
      esgotado: false
    },
    {
      id: 3,
      nome: "Celular Mini",
      descricao: "Celular pequeno",
      esgotado: true
    }
  ]
}
