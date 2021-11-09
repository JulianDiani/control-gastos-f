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
              'rgb(2, 242, 238)',
              '	rgb(3, 252, 177)',
              'rgb(13, 230, 103)',
              'rgb(3, 252, 36)',
              'rgb(47, 242, 2)',
              'rgb(13, 227, 252)',
              'rgb(0, 175, 230)',
              'rgb(13, 133, 252)',
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
  root: {},
});
