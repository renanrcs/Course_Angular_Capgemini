import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensages: string[] = [];

  logar(mensagem: string) { console.log(mensagem)
    this.mensages.push(mensagem);
  }

  showAllLogs(){
    console.log(this.mensages);
  }

}
