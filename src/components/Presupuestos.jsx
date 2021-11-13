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
  getPagoAProv,
  getRendEsp,
  getContratos,
} from '../services/presupuestos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './presupuestoComponents/TortaPrincipal';
import CardMontos from './presupuestoComponents/CardMontos';
import Tabla from './presupuestoComponents/Tabla';
import Grid from '@material-ui/core/Grid';

export const Presupuestos = () => {
  const $ = useStyles();
  const [hasError, setHasError] = useState(false);

  const [presupuesto, setPresupuesto] = useState(null);
  const [reformulacion, setReformulacion] = useState(null);

  const [pagoAProveedores, setPagoAProv] = useState(null);
  const [rendicionesEspecificas, setRendEsp] = useState(null);
  const [contratos, setContratos] = useState(null);
  const [gastos, setGastos] = useState(null);

  const [totales, setTotales] = useState(null);

  useEffect(() => {
    async function fetchPrespuesto() {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionReformulacion = getReformulacion;

      const getFunctionPagoAProv = getPagoAProv;
      const getFunctionRendEsp = getRendEsp;
      const getFunctionContratos = getContratos;
      const getFunctionGastos = getGastos;

      const getFunctionTotales = getTotales;

      try {
        const presupuesto = await getFunctionPresupuesto();
        const reformulacion = await getFunctionReformulacion();

        const pagoAProveedores = await getFunctionPagoAProv();
        const rendicionesEspecificas = await getFunctionRendEsp();
        const contratos = await getFunctionContratos();
        const gastos = await getFunctionGastos();

        const totales = await getFunctionTotales();

        setPresupuesto(presupuesto);
        setReformulacion(reformulacion);

        setPagoAProv(pagoAProveedores);
        setRendEsp(rendicionesEspecificas);
        setContratos(contratos);
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
              rendicionesEspecificas={rendicionesEspecificas}
              pagoAProveedores={pagoAProveedores}
              contratos={contratos}
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
      <h1>Presupuesto</h1>
      <div className={$.root}>
        <Divider className={$.divider} />
        {presupuesto &&
        gastos &&
        reformulacion &&
        totales &&
        rendicionesEspecificas &&
        pagoAProveedores &&
        contratos
          ? rendering()
          : loadingRendering()}
      </div>
      <Footer />
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
