import { LoggerService } from './../logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-services1',
  templateUrl: './example-services1.component.html',
  styleUrls: ['./example-services1.component.css']
})
export class ExampleServices1Component  {
  name = "";

  constructor(private logger: LoggerService){}

  addName(){
    this.logger.logar(`O nome ${this.name} foi adicionado`);
  }
}
