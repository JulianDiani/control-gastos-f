import { Pie } from 'react-chartjs-2';
import React from 'react';
import { montoDisponible, nivelDeEjecucion } from '../../utils/presupuestos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  graficoTor: {
    width: '25rem !important',
    height: 'auto !important',
  },
});
export default function TortaPrincipal({
  presupuesto,
  totalGastos,
  totalPresupuesto,
}) {
  const totalDisponible = presupuesto; //ToDo - Ver si esta bien tener en una misma prop el presupuesto total y las reformulaciones.
  const monto = montoDisponible(totalPresupuesto, totalGastos);
  const ejecucion = nivelDeEjecucion(totalPresupuesto, totalGastos);
  const $ = useStyles();
  const datosAConsumir = (({
    Bibliografía,
    Equipamiento,
    Publicación,
    Insumos,
    Administración,
    Viajes,
  }) => ({
    Bibliografía,
    Equipamiento,
    Publicación,
    Insumos,
    Administración,
    Viajes,
  }))(totalDisponible, monto, ejecucion);
  const graficoTorta = (
    <Pie
      className={$.graficoTor}
      data={{
        labels: Object.keys(datosAConsumir).map((key) => {
          return key;
        }),
        datasets: [
          {
            label: 'Presupuesto',
            backgroundColor: [
              '#f2626b',
              '#feba4f',
              '#ffea7f',
              '#89e077',
              '#83c3ff',
              '#c381fd',
              '#e28956',
            ],
            data: [
              totalDisponible.Bibliografía,
              totalDisponible.Equipamiento,
              totalDisponible['Gastos de Publicación'],
              totalDisponible.Insumos,
              totalDisponible['Servicios Técnicos y Gastos de Administración'],
              totalDisponible['Viajes y Viáticos'],
            ],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Estado actual del presupuesto` },
      }}
    />
  );

  return <>{graficoTorta}</>;
}
