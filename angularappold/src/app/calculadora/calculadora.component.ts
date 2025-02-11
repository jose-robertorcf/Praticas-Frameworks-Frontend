import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numeroAtual = '0'; //armazena o número que será exibido no resultado
  primeiroOperando = null; //recebe o valor do primeiro operando
  operador = null; //recebe o tipo de operação
  aguardarSegundoNumero = false; //estado que indica se o usuário terminou de digitar o primeiro operando

  //Método que otem o núero atual
  public getNumero(v: string){
    console.log(v);
    if(this.aguardarSegundoNumero)
    {
      this.numeroAtual = v;
      this.aguardarSegundoNumero = false;
    }else{
      this.numeroAtual === '0'? this.numeroAtual = v: this.numeroAtual += v;
    }
  }

  //Método que acrescenta o ponto de decimal
  getDecimal(){
    if(!this.numeroAtual.includes('.')){
        this.numeroAtual += '.'; 
    }
  }

  //Método que efetua o Cálculo
  private efetuarCalculo(op , segundoOperando){
    switch (op){
      case '+':
      return this.primeiroOperando += segundoOperando; 
      case '-': 
      return this.primeiroOperando -= segundoOperando; 
      case '*': 
      return this.primeiroOperando *= segundoOperando; 
      case '/': 
      return this.primeiroOperando /= segundoOperando; 
      case '=':
      return segundoOperando;
    }
  }

  //Define o método para executar a operação
  public getOperador(op: string){
    console.log(op);

    if(this.primeiroOperando === null){
      this.primeiroOperando = Number(this.numeroAtual);

    }else if(this.operador){
      const result = this.efetuarCalculo(this.operador , Number(this.numeroAtual))
      this.numeroAtual = String(result);
      this.primeiroOperando = result;
    }
    this.operador = op;
    this.aguardarSegundoNumero = true;
    console.log(this.primeiroOperando);
  }

  //Define o método para limpar a calculadora
  public limpar(){
    this.numeroAtual = '0';
    this.primeiroOperando = null;
    this.operador = null;
    this.aguardarSegundoNumero = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
