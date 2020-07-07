import { PessoasService } from './../pessoas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-listagem',
  templateUrl: './pessoas-listagem.component.html',
  styleUrls: ['./pessoas-listagem.component.css']
})
export class PessoasListagemComponent implements OnInit {

  pessoas: Array<any>;

  constructor(private pessoaService: PessoasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pessoaService.listar().subscribe(dados => this.pessoas = dados);
  }

}
