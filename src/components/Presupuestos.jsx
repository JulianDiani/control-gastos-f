import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto, getGastos } from '../services/presupuestos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './TortaPrincipal';
import CardMontos from './CardMontos';
import Tabla from './Tabla';
import Grid from '@material-ui/core/Grid';

export const Presupuestos = () => {
  const $ = useStyles();
  const [presupuesto, setPresupuesto] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [gastos, setGastos] = useState(null);

  useEffect(() => {
    async function fetchPrespuesto() {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionGastos = getGastos;

      try {
        const presupuesto = await getFunctionPresupuesto();
        const gastos = await getFunctionGastos();
        setPresupuesto(presupuesto);
        setGastos(gastos);
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
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <CardMontos
                className={$.elementosPrincipales}
                totalPresupuesto={presupuesto.totalPresupuesto}
                totalGastos={gastos.totalGastos}
              />
              <Card className={$.card}>
                <CardContent>
                  <TortaPrincipal presupuesto={presupuesto} gastos={gastos} />
                </CardContent>
              </Card>
            </Grid>

            <Tabla />
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
        {presupuesto && gastos ? rendering() : loadingRendering()}

        <Footer />
      </div>
    </>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  elementosPrincipales: {
    height: '50%',
    width: '50%',
    display: 'flex',
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
    marginBottom: '2rem',
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
