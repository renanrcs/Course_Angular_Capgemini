import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-personalizado',
  templateUrl: './component-personalizado.component.html',
  styleUrls: ['./component-personalizado.component.css']
})
export class ComponentPersonalizadoComponent {
  @Input() name = "";
  @Input() lastName = "";
}
