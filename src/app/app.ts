import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AgregarComponentes } from './components/agregar-componentes/agregar-componentes';
import { ListaComponentes } from './components/lista-componentes/lista-componentes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AgregarComponentes, ListaComponentes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaComponentes: string[] = [];
  
  agregarComponentesLista(Componente: string[]): void {
    this.listaComponentes.push(...Componente);
  }
}
