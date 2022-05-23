import { Doughnut } from 'react-chartjs-2';
import React from 'react';


export default function TortaPrincipal({presupuesto }) {
  
  const totalDisponible = presupuesto[0]; //ToDo - Ver si esta bien tener en una misma prop el presupuesto total y las reformulaciones.
  console.log("Presupuesto: ",presupuesto)
  const graficoTorta = (
    <Doughnut
      data={{
        labels: Object.keys(totalDisponible).map(key =>{
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

