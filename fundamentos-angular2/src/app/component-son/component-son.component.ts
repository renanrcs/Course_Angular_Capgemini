import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-son',
  templateUrl: './component-son.component.html',
  styleUrls: ['./component-son.component.css']
})
export class ComponentSonComponent {
  @Input() sobrenome = "";
  @Output() showName = new EventEmitter();

  name = "";
}
