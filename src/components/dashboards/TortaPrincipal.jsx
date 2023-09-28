import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { montoDisponible, nivelDeEjecucion } from '../../utils/presupuestos'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  graficoTor: {
    width: '25rem !important',
    height: 'auto !important'
  },
});
export default function TortaPrincipal({ presupuesto, totalGastos, totalPresupuesto }) {
  console.log("presupuesto",presupuesto)
  console.log("presupuesto",totalGastos)
  console.log("presupuesto",totalPresupuesto)
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
              totalDisponible.insumos,
              totalDisponible.publicaciones,
              totalDisponible.bibliografia,
              totalDisponible.viaticos,
              totalDisponible.equipamiento,
              totalDisponible.tecnico,
              totalDisponible.administracion,
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

