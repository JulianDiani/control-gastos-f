import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function TortaPrincipal({presupuesto }) {
  
  const totalDisponible = presupuesto[0]; //ToDo - Ver si esta bien tener en una misma prop el presupuesto total y las reformulaciones.
  const graficoTorta = (
    <Doughnut
      data={{
        labels: [
          'Insumos',
          'Bibliografia',
          'Publicaciones',
          'Viajes y viaticos',
          'Equipamiento',
          'Servicios Tecnicos',
          'Gastos De Administración',
        ],
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
              totalDisponible.gastosDePublicacion,
              totalDisponible.bibliografia,
              totalDisponible.viajesYViaticos,
              totalDisponible.equipamiento,
              totalDisponible.serviciosTecnicos,
              totalDisponible.gastosDeAdministracion,
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

