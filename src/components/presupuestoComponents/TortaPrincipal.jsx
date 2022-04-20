import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function TortaPrincipal({ gastos, presupuesto, disponible }) {
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
              disponible.insumos,
              disponible.gastosDePublicacion,
              disponible.bibliografia,
              disponible.viajesYViaticos,
              disponible.equipamiento,
              disponible.serviciosTecnicos,
              disponible.gastosDeAdministracion,
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
