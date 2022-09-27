import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {

  horarrio = new Date();
  timer: any = null;

  @Input() texto = "";

  ngOnInit(): void {
    console.log(`Evento OnInit disparou`);
    this.timer = setInterval(() => this.horarrio = new Date, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
