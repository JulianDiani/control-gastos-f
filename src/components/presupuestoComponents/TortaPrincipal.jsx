import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function TortaPrincipal({ gastos, presupuesto }) {
  const classes = useStyles();
  {
    gastos ? gastos : null;
  }
  {
    presupuesto ? presupuesto : null;
  }
  const graficoTorta = (
    <Doughnut
      className={classes.root}
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
              'rgb(250, 175, 30)',
              'rgb(165, 200, 250)',
              'rgb(255, 158, 54)',
              'rgb(165, 200, 250)',
              'rgb(1, 72, 173)',
              'rgb(255, 187, 56)',
              'rgb(173, 115, 3)',
              'rgb(250, 175, 30)',
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
        legend: { display: true },
        title: { display: true, text: `Estado actual del presupuesto` },
      }}
    />
  );

  return <div>{graficoTorta}</div>;
}

const useStyles = makeStyles({
  root: {}
});
