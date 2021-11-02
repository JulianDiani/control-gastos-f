import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CardMontos({ totalPresupuesto, totalGastos }) {
  const classes = useStyles();

  // console.log(presupuesto.tipoPresupuesto);

  // let montoDisponible = (p, g) => p - g;
  //let montoDisponible = presupuestoTotal - gastosTotal;
  console.log(totalPresupuesto);
  // lo hago como let no como funcion, tiene alguna diferencia?

  const nivelDeEjecucion = Number(23 / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Monto disponible: {totalGastos}
        </Typography>

        <Typography variant="body2" component="p">
          Nivel de ejecución: {totalPresupuesto}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});