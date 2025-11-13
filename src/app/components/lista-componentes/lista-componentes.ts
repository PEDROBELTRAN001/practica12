import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-componentes',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-componentes.html',
  styleUrl: './lista-componentes.css',
})
export class ListaComponentes {
  @Input() componentes: string[] = [];}
