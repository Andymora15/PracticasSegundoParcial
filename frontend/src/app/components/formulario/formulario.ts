import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GastoService, Gasto } from '../../services/gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
  imports: [CommonModule, FormsModule, RouterModule]
})
export class Formulario {
  gasto: Gasto = {
    nombre: '',
    gasto: '',
    monto: 0,
    informacion: ''
  };
  editMode = false;
  mensaje = '';

  constructor(private gastoService: GastoService) {}

  guardarGasto() {
    if (this.editMode && this.gasto._id) {
      this.gastoService.updateGasto(this.gasto._id, this.gasto).subscribe(() => {
        this.mensaje = 'Gasto actualizado correctamente';
        this.resetForm();
      });
    } else {
      this.gastoService.createGasto(this.gasto).subscribe(() => {
        this.mensaje = 'Gasto creado correctamente';
        this.resetForm();
      });
    }
  }

  cargarGasto(gasto: Gasto) {
    this.gasto = { ...gasto };
    this.editMode = true;
  }

  resetForm() {
    this.gasto = {
      nombre: '',
      gasto: '',
      monto: 0,
      informacion: ''
    };
    this.editMode = false;
  }
}
