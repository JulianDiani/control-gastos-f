const _ = require('lodash');

const montoDisponible = (presupuesto, gastos) => presupuesto - gastos;

const nivelDeEjecucion = (presupuesto, gastos) =>
  Number(gastos / presupuesto).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });

const calculateTotalExpenses = (compras) => {
  const gastos = compras.map((a) => parseInt(a.monto));
  if (gastos.length === 0) {
    return 0;
  }
  return _.sum(gastos || 0);
};

export { montoDisponible, nivelDeEjecucion, calculateTotalExpenses };
