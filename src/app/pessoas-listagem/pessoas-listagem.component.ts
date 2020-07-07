import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-listagem',
  templateUrl: './pessoas-listagem.component.html',
  styleUrls: ['./pessoas-listagem.component.css']
})
export class PessoasListagemComponent implements OnInit {

  pessoas = [
    { id: 1, nome: 'Denys', email: 'denys@gmail.com' },
    { id: 2, nome: 'Mayara', email: 'mayara@gmail.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
