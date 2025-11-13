import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-componentes',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-componentes.html',
  styleUrl: './agregar-componentes.css',
})
export class AgregarComponentes {
  nuevaComponente: string = '';
  @Output() componentesAgregados: EventEmitter<string[]> = new EventEmitter<string[]>();
  
  agregarComponentes(): void {
    if (this.nuevaComponente.trim() !== '') {
      this.componentesAgregados.emit([this.nuevaComponente]);
      this.nuevaComponente = '';  
    }
  }
}
