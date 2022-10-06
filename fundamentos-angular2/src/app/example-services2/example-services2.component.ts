import { LoggerService } from './../logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-services2',
  templateUrl: './example-services2.component.html',
  styleUrls: ['./example-services2.component.css']
})
export class ExampleServices2Component  {

  description = "";

  constructor(public logger: LoggerService){}

  addProduct(){
    this.logger.logar(`O produto ${this.description} foi adicionado`);
  }
}
