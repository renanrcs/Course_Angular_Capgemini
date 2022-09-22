import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name = "Renan";
  dataNascimento = "1991/10/16";
  urlImage = "/assets/logo_proway.png"

  mostrarDataNascimento(){
    alert(`A data de nascimento do ${this.name} é: ${this.dataNascimento}`);
  }
}
