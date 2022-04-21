import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto, getGastos } from '../services/presupuestos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './presupuestoComponents/TortaPrincipal';
import CardMontos from './presupuestoComponents/CardMontos';
import Tabla from './presupuestoComponents/Tabla';
import Grid from '@material-ui/core/Grid';

function totalCalculo(gastos, presupuesto) {
  var prueba = {
    tipo: 'Total disponible',
    insumos: 0,
    bibliografia: 0,
    gastosDePublicacion: 0,
    viajesYViaticos: 0,
    equipamiento: 0,
    serviciosTecnicos: 0,
    gastosDeAdministracion: 0,
    total: 0,
  };

  presupuesto.map((pre) => {
    prueba.insumos += pre.insumos;
    prueba.bibliografia += pre.bibliografia;
    prueba.gastosDePublicacion += pre.gastosDePublicacion;
    prueba.viajesYViaticos += pre.viajesYViaticos;
    prueba.equipamiento += pre.equipamiento;
    prueba.serviciosTecnicos += pre.serviciosTecnicos;
    prueba.gastosDeAdministracion += pre.gastosDeAdministracion;
    prueba.total += pre.total;
  });
  gastos.map((pre) => {
    prueba.insumos -= pre.insumos;
    prueba.bibliografia -= pre.bibliografia;
    prueba.gastosDePublicacion -= pre.gastosDePublicacion;
    prueba.viajesYViaticos -= pre.viajesYViaticos;
    prueba.equipamiento -= pre.equipamiento;
    prueba.serviciosTecnicos -= pre.serviciosTecnicos;
    prueba.gastosDeAdministracion -= pre.gastosDeAdministracion;
    prueba.total -= pre.total;
  });
  return prueba;
}

export const Presupuestos = () => {
  const $ = useStyles();
  const [hasError, setHasError] = useState(false);

  const [presupuesto, setPresupuesto] = useState(null);
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
              justifyContent="space-between"
              alignItems="flex"
              xl="auto"
            >
              <CardMontos
                item
                xl={6}
                totalPresupuesto={presupuesto[0].total}
                totalGastos={gastos[0].total}
              />
              <Card className={$.card}>
                <CardContent>
                  <TortaPrincipal
                    presupuesto={presupuesto}
                    gastos={gastos}
                    disponible={totalCalculo(gastos, presupuesto)}
                    className={$.torta}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Tabla
              presupuesto={presupuesto}
              gastos={gastos}
              totalDisponible={totalCalculo(gastos, presupuesto)}
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
        {presupuesto && gastos ? rendering() : loadingRendering()}
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
    marginLeft: '1vw',
  },
  card: {
    width: '25vw',
    marginLeft: '15vw',
    marginBottom: '1rem',
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
