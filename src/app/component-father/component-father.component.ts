import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-father',
  templateUrl: './component-father.component.html',
  styleUrls: ['./component-father.component.css']
})
export class ComponentFatherComponent {
  sobrenome = "da Silva";

  showNameComplet(nameComplet: any){
    alert(`Nome completo é: ${nameComplet}`);
  }
}
