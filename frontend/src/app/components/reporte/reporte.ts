import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GastoService, Gasto } from '../../services/gasto';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.html',
  styleUrl: './reporte.scss',
  imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe, RouterModule]
})
export class Reporte implements OnInit {
  gastos: Gasto[] = [];
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private gastoService: GastoService) {}

  ngOnInit() {
    this.getGastos();
  }

  getGastos() {
    this.gastoService.getGastos().subscribe(data => {
      this.gastos = data;
    });
  }

  filtrarPorFecha() {
    if (this.fechaInicio && this.fechaFin) {
      const inicio = new Date(this.fechaInicio);
      const fin = new Date(this.fechaFin);
      this.gastos = this.gastos.filter(g => {
        const fecha = new Date(g.createdAt!);
        return fecha >= inicio && fecha <= fin;
      });
    } else {
      this.getGastos();
    }
  }
}
