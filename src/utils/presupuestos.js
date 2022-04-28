const _ = require('lodash');

const montoDisponible = (presupuesto, gastos) => presupuesto - gastos;

const nivelDeEjecucion = (presupuesto, gastos) =>
  Number(gastos / presupuesto).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });

const calculateTotalExpenses = (compras) => {
  const gastos = compras.data.map((a) => parseInt(a.monto));
  return _.sum(gastos);
};

export { montoDisponible, nivelDeEjecucion, calculateTotalExpenses };
