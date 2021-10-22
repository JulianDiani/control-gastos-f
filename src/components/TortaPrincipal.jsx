import { Doughnut } from 'react-chartjs-2';
import React from 'react';

export default function TortaPrincipal({ gastos, presupuesto }) {
  {
    gastos ? gastos : null;
  }
  {
    presupuesto ? presupuesto : null;
  }
  const graficoTorta = (
    <Doughnut
      data={{
        labels: [
          'Disponible',
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
              'rgba(237, 255, 0, 1)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
              'rgba(136, 251, 5, 1)',
              'rgba(13, 251, 5, 1)',
              'rgba(5, 251, 120, 1)',
              'rgba(5, 251, 243, 1)',
              'rgba(5, 13, 251, 1)',
            ],
            data: [
              presupuesto.totalPresupuesto,
              gastos.insumos,
              gastos.gastosDePublicacion,
              gastos.bibliografia,
              gastos.viajesYViaticos,
              gastos.equipamiento,
              gastos.serviciosTecnicos,
              gastos.gastosDeAdministracion,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual del presupuesto` },
      }}
    />
  );

  return <div>{graficoTorta}</div>;
}
