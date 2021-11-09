import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {
  getPresupuesto,
  getReformulacion,
  getGastos,
  getTotales,
} from '../services/presupuestos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './TortaPrincipal';
import CardMontos from './CardMontos';
import Tabla from './Tabla';
import Grid from '@material-ui/core/Grid';

export const Presupuestos = () => {
  const $ = useStyles();
  const [hasError, setHasError] = useState(false);

  const [presupuesto, setPresupuesto] = useState(null);
  const [reformulacion, setReformulacion] = useState(null);

  const [gastos, setGastos] = useState(null);

  const [totales, setTotales] = useState(null);

  useEffect(() => {
    async function fetchPrespuesto() {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionReformulacion = getReformulacion;

      const getFunctionGastos = getGastos;
      const getFunctionTotales = getTotales;

      try {
        const presupuesto = await getFunctionPresupuesto();
        const reformulacion = await getFunctionReformulacion();

        const gastos = await getFunctionGastos();
        const totales = await getFunctionTotales();

        setPresupuesto(presupuesto);
        setReformulacion(reformulacion);

        setGastos(gastos);
        setTotales(totales);
      } catch (err) {
        setHasError(true);
        console.log('ERROR USE EFFECT : ' + err);
      }
    }
    fetchPrespuesto();
  }, []);

  const loadingRendering = () => {
    return <Alert severity="info">Cargando...</Alert>;
  };

  const rendering = () => {
    return (
      <>
        <div className={$.root}>
          <Grid container direction="column" alignItems="center">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <CardMontos
                item
                xs={6}
                className={$.cardMonto}
                totalPresupuesto={presupuesto.totalPresupuesto}
                totalGastos={gastos.totalGastos}
              />
              <Card className={$.card} item xs={6}>
                <CardContent>
                  <TortaPrincipal
                    presupuesto={presupuesto}
                    gastos={gastos}
                    className={$.torta}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Tabla
              presupuesto={presupuesto}
              reformulacion={reformulacion}
              gastos={gastos}
              totales={totales}
            />
          </Grid>
        </div>
      </>
    );
  };

  return (
    <>
      <div clasName={$.root}>
        <h1>Presupuesto</h1>
        <Divider className={$.divider} />
        {presupuesto && gastos && reformulacion && totales
          ? rendering()
          : loadingRendering()}
        <Footer />
      </div>
    </>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  root: {
    height: '100%',
    display: 'flex',
  },
  card: {
    width: '50%',
    margin: '1rem',
  },
  divider: {
    marginBottom: '1rem',
  },
  item: {
    display: 'flex',
  },
  key: {
    fontWeight: 'bolder',
  },
  parrafo: {
    padding: '3rem',
    fontSize: '16px',
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: '3rem',
  },
  dropDown: {
    marginRight: '1rem',
    width: '10rem',
  },
  menuItem: {
    marginLeft: '1rem',
  },
});
