import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { montoDisponible, nivelDeEjecucion } from '../../utils/presupuestos'
import { formatPrice } from '../../utils/validaciones';

export default function CardMontos({ totalGastos, totalPresupuesto }) {
  const $ = useStyles();
 
  const monto = montoDisponible(totalPresupuesto,totalGastos)
  const ejecucion = nivelDeEjecucion(totalPresupuesto, totalGastos);

  return (
    <Card className={$.root}>
      <CardContent>
      <Typography
          variant="h5"
          component="h2"
          className={$.typography}
        >
         Presupuesto total: 
        </Typography>
        <span
          variant="h5"
          className={$.typography}
        >
         {formatPrice(totalPresupuesto)}
        </span>
        <Typography
          variant="h5"
          component="h2"
          className={$.typography}
        >
          Monto disponible: 
        </Typography>
        <span
          variant="h5"
          className={$.typography}
        >
         {formatPrice(monto)}
        </span>
        <Typography
          variant="body2"
          component="p"
          className={$.typography}
        >
          Nivel de ejecución: 
        </Typography>
        <span
          variant="h5"
          className={$.typography}
        >
         {ejecucion}
        </span>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: '25rem',
    height: '95%',
    background: '#9BC76D',
    border: '4px solid rgba(96, 150, 0, 0.94)',
    boxSizing: 'border-box',
    borderRadius: '19px',
  },
  typography: {
    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontSize: '40px',
    lineHeight: '49px',
    color: '#000000',
  },  
});
