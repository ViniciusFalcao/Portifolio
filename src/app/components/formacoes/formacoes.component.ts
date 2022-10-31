import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacoes',
  templateUrl: './formacoes.component.html',
  styleUrls: ['./formacoes.component.css']
})
export class FormacoesComponent implements OnInit {
  fNumber:number=0;

  constructor() { }

  ngOnInit(): void {
    this.mudaFormacoes()
  }
  mudaFormacoes(){
    setInterval(()=>{
      if (this.fNumber==1) {
        this.fNumber=0;

      }else{this.fNumber++}


    },3000)



  }


}
