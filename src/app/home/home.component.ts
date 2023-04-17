import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  titulos = ['ID', 'Nome', 'E-mail'];
  dadosDaTabela = [
    { id: 1, nome: 'João', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' },
    { id: 3, nome: 'José', email: 'jose@example.com' },
    { id: 4, nome: 'José Maria', email: 'josemaria@example.com' },
  ];
}
