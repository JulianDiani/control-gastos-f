import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { montoDisponible, nivelDeEjecucion } from '../../utils/presupuestos'
import { makeStyles } from '@material-ui/core/styles';

export default function TortaPrincipal({ presupuesto, totalGastos, totalPresupuesto }) {

  const totalDisponible = presupuesto; //ToDo - Ver si esta bien tener en una misma prop el presupuesto total y las reformulaciones.
  const monto = montoDisponible(totalPresupuesto, totalGastos)
  const ejecucion = nivelDeEjecucion(totalPresupuesto, totalGastos);
  const $ = useStyles();
  const datosAConsumir = (({
    Insumos,
    Bibliografia,
    Publicaciones,
    Viaticos,
    Equipamiento,
    Tecnico,
    Administracion,

  }) => ({
    Insumos,
    Bibliografia,
    Publicaciones,
    Viaticos,
    Equipamiento,
    Tecnico,
    Administracion,

  }))(totalDisponible, monto, ejecucion);

  const graficoTorta = (

    <Doughnut className={$.graficoTor}
      data={{
        labels: Object.keys(datosAConsumir).map(key => {
          return key;
        }),
        datasets: [
          {
            label: 'Presupuesto',
            backgroundColor: [
              '#56e2cf',
              '#cf56e2',
              '#56aee2',
              '#e2cf56',
              '#e25668',
              '#8a56e2',
              '#e28956',
            ],
            data: [
              totalDisponible.Insumos,
              totalDisponible.Publicaciones,
              totalDisponible.Bibliografia,
              totalDisponible.Viaticos,
              totalDisponible.Equipamiento,
              totalDisponible.Tecnico,
              totalDisponible.Administracion,
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

const useStyles = makeStyles({
  graficoTor: {
    width: '25rem !important',
    height: 'auto !important'
  },
});