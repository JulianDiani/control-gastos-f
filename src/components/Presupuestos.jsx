import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto } from '../services/presupuestos.js';
import { getAllCompras } from '../services/compras.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './dashboards/TortaPrincipal';
import CardMontos from './dashboards/CardMontos';
import Tabla from './dashboards/Tabla';
import Grid from '@material-ui/core/Grid';
import { calculateTotalExpenses } from '../utils/presupuestos'

export const Presupuestos = () => {
  const $ = useStyles();
  
  const [presupuesto, setPresupuesto] = useState(null);
  const [comprasRealizadas, setComprasRealizadas] = useState(null);
  const [totalGastos, setTotalGastos] = useState(null);

  useEffect(() => {
    async function fetchPrespuesto() {
      try {
        const presupuesto = await getPresupuesto();
        const comprasRealizadas = await getAllCompras();
        const gastos = calculateTotalExpenses(comprasRealizadas);
        setTotalGastos(gastos);
        setComprasRealizadas(comprasRealizadas);
        setPresupuesto(presupuesto);
      } catch (err) {
        console.log('ERROR USE EFFECT : ' + err);
        //ToDo: Manejo de errores
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
              className={$.cardContent}
            >
              <CardMontos
                item
                xl={6}
                totalPresupuesto={presupuesto.total}
                totalGastos={totalGastos}
              />
              <Card className={$.card}>
                <CardContent>
                  <TortaPrincipal
                    presupuesto={presupuesto}
                    className={$.torta}
                  />
                </CardContent>
              </Card>
            </Grid>
            {/* <Tabla
              presupuesto={presupuesto}
              gastos={comprasRealizadas.data}
              totalDisponible={presupuesto.total - totalGastos}
            /> */}
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
        {presupuesto && totalGastos ? rendering() : loadingRendering()}
      </div>
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  root: {
    height: '100vw',
    display: 'flex',
    marginLeft: '1vw',
  },
  card: {
    width: '25vw',
    marginLeft: '15vw',
    marginBottom: '1rem',
  },
  cardContent: {
    marginBottom: '2rem',
  },
  divider: {
    marginBottom: '1rem',
  },
  item: {
    display: 'flex',
  },
});
