import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CardMontos({ totalGastos, totalPresupuesto }) {
  const classes = useStyles();

  {
    totalGastos ? totalGastos : null;
  }
  {
    totalPresupuesto ? totalPresupuesto : null;
  }

  let montoDisponible = (p, g) => p - g;
  let nivelDeEjecucion = (p, g) =>
    Number(g / p).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          className={classes.montoDisponible}
        >
          Monto disponible: $ {montoDisponible(totalPresupuesto, totalGastos)}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          className={classes.nivelDeEjecucion}
        >
          Nivel de ejecución: {nivelDeEjecucion(totalPresupuesto, totalGastos)}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: '20vw',
    height: '25vh',
    background: '#DEFAAE',
    border: '4px solid rgba(96, 150, 0, 0.94)',
    boxSizing: 'border-box',
    borderRadius: '19px',
  },

  montoDisponible: {
    width: '312px',
    height: '109px',

    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: '49px',
    color: '#000000',
  },

  nivelDeEjecucion: {
    width: '321px',
    height: '109px',
    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: '49px',
    color: '#000000',
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
