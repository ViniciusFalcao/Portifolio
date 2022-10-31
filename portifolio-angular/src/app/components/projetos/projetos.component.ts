import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  option=''

  projetos:string[]=['Jogo da forca','Encriptador','Cartão NFT','Verificador Étario']



  constructor() { }

  ngOnInit(): void {
  }



}
