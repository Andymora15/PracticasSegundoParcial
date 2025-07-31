import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GastoService, Gasto } from '../../services/gasto';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.html',
  styleUrl: './informacion.scss',
  imports: [CommonModule, CurrencyPipe, RouterModule]
})
export class Informacion implements OnInit {
  gastos: Gasto[] = [];
  selectedGasto: Gasto | null = null;
  loading = false;

  constructor(private gastoService: GastoService) {}

  ngOnInit() {
    this.getGastos();
  }

  getGastos() {
    this.loading = true;
    this.gastoService.getGastos().subscribe({
      next: (data) => {
        this.gastos = data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  selectGasto(gasto: Gasto) {
    this.selectedGasto = { ...gasto };
  }

  deleteGasto(id: string) {
    if (confirm('¿Seguro que deseas eliminar este gasto?')) {
      this.gastoService.deleteGasto(id).subscribe(() => {
        this.getGastos();
        this.selectedGasto = null;
      });
    }
  }
}
