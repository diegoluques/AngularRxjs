import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'AngularRxjs';

  ngOnInit(): void {
    // this.minnhaPromisse('Diego')
    //   .then(result => console.log('Resultado:', result))

    // this.minnhaPromisse('Diogo')
    //   .then(result => console.log('Resultado:', result))
    //   .catch(erro => console.log('Ocorreu um erro:', erro)
    //   )

    this.minhaObservable('')
      .subscribe(
        result => console.log('Resultado: ', result),
        erro => console.log('Erro: ', erro)
      )
  }

  minnhaPromisse(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === "Diego") {
        setTimeout(() => {
          resolve('Seja bem vindo ' + 'Diego');
        }, 5000);
      }
      else {
        reject('Ops! Você não é Diego');
      }
    })
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Diego') {
        subscriber.next('Olá ' + nome);
        subscriber.next('Olá de novo ' + nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        }, 5000);
      }
      else {
        subscriber.error('Ops! Deu erro!');
      }
    })
  }

}
