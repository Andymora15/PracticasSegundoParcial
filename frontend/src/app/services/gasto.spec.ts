import { Gasto } from './gasto';

describe('Gasto interface', () => {
  it('should allow creation of a valid Gasto object', () => {
    const gasto: Gasto = {
      nombre: 'Prueba',
      gasto: 'Comida',
      monto: 100,
      informacion: 'Almuerzo',
    };
    expect(gasto).toBeTruthy();
    expect(gasto.nombre).toBe('Prueba');
    expect(gasto.gasto).toBe('Comida');
    expect(gasto.monto).toBe(100);
    expect(gasto.informacion).toBe('Almuerzo');
  });
});
