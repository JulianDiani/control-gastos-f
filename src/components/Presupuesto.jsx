import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto, getGastos } from '../services/proyectos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincial from './presupuestoComponents/TortaPrincincipal';
import CardMontos from './presupuestoComponents/CardMontos';
import Tabla from './presupuestoComponents/Tabla';
import Box from '@material-ui/core/Box';

export const Presupuesto = () => {
  const $ = useStyles();
  const [presupuesto, setPresupuesto] = useState(null);
  const [hasError, setHasError] = useState(false); //Usando el hasError no me funcionaba - cambie el ternario por proyecto ? rendering() : loadingRendering() para que valide que no sea null proyecto
  const [gastos, setGastos] = useState(null);

  useEffect(() => {
    async function fetchPrespuesto() {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionGastos = getGastos;

      try {
        const presupuesto = await getFunctionPresupuesto();
        setPresupuesto(presupuesto);
        const gastos = await getFunctionGastos();
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
          <CardMontos presupuesto={presupuesto} gastos={gastos} />

          <Card className={$.card}>
            <CardContent>
              <TortaPrincial presupuesto={presupuesto} gastos={gastos} />
            </CardContent>
          </Card>

          <Tabla presupuesto={presupuesto} gastos={gastos} />
        </div>
      </>
    );
  };

  return (
    <>
      <div clasName={$.root}>
        <h1>Presupuesto</h1>
        <Divider className={$.divider} />
        {presupuesto ? rendering() : loadingRendering()}
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
