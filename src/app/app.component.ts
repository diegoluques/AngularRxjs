import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'AngularRxjs';

  ngOnInit(): void {
    // Chamada sem tratamento de erro
    // this.minnhaPromisse('Diego')
    //   .then(result => console.log('Resultado:', result))

    // Chamada com tratamento de erro
    // this.minnhaPromisse('Diogo')
    //   .then(result => console.log('Resultado:', result))
    //   .catch(erro => console.log('Ocorreu um erro:', erro)
    //   )

    // Chamada com tratamento de erro
    // this.minhaObservable('Diego')
    //   .subscribe(
    //     result => console.log('Resultado: ', result),
    //     erro => console.log('Erro: ', erro),
    //     () => console.log('Fim')
    //   );

    //Inicío: Criar observer mais complexo caso necessário
    const observer = {
      next: valor => console.log('Next: ', valor),
      error: erro => console.log('Next: ', erro),
      complete: () => console.log('Fim')
    }

    //const obs = this.minhaObservable('Diego');
    //obs.subscribe(observer);
    //Fim

    const obs = this.usuarioObservable('Admin', 'admin@teste.com');
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão fechada: ', subs.closed);

    }, 3500);
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

  // minhaObservable(nome: string): Observable<string> {
  //   return new Observable(subscriber => {
  //     if (nome === 'Diego') {
  //       subscriber.next('Olá ' + nome);
  //       subscriber.next('Olá de novo ' + nome);
  //       setTimeout(() => {
  //         subscriber.next('Resposta com delay ' + nome);
  //       }, 5000);
  //       // subscriber.complete(); //Corta a comunicação com a observable
  //     }
  //     else {
  //       subscriber.error('Ops! Deu erro!');
  //     }
  //   })
  // }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Admin') {

        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);
        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      }
      else {
        subscriber.error('Ops! Deu erro!');
      }
    })
  }

}
