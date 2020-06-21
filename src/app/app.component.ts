import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'AngularRxjs';

  ngOnInit(): void {
    // this.minnhaPromisse('Diego')
    //   .then(result => console.log('Resultado:', result))

    this.minnhaPromisse('Diogo')
      .then(result => console.log('Resultado:', result))
      .catch(erro => console.log('Ocorreu um erro:', erro)
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

}
