import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto } from '../services/presupuestos.js';
import { getComprasByProyecto } from '../services/compras.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TortaPrincipal from './dashboards/TortaPrincipal';
import CardMontos from './dashboards/CardMontos';
import { getProyectoById } from '../services/proyectos.js';

import Grid from '@material-ui/core/Grid';
import { calculateTotalExpenses } from '../utils/presupuestos';

export const Presupuestos = ({ idProyecto }) => {
  const $ = useStyles();

  const [proyecto, setProyecto] = useState(null);
  const [presupuesto, setPresupuesto] = useState(null);
  const [comprasRealizadas, setComprasRealizadas] = useState(null);
  const [totalGastos, setTotalGastos] = useState(null);

  console.log(proyecto)

  useEffect(() => {
    let isMounted = true;
    async function fetchProyectos() {
      if (idProyecto)
        try {
          const proyecto = await getProyectoById(idProyecto); //Tiene que ser por ID la busqueda
          const presupuesto = await getPresupuesto();
          const compras = await getComprasByProyecto(idProyecto);
          const gastos = calculateTotalExpenses(compras);
          if (isMounted) {
            setProyecto(proyecto[0]);
            setTotalGastos(gastos);
            setComprasRealizadas(comprasRealizadas);
            setPresupuesto(presupuesto);
          }
        } catch (err) {
          console.log('[DatosGenerales Component] ERROR : ' + err);
        }
      else {
        return window.history.back();
      }
    }
    fetchProyectos();
    return () => {
      isMounted = false;
    };
  }, [idProyecto, comprasRealizadas]);

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
                    totalPresupuesto={presupuesto.total}
                    totalGastos={totalGastos}
                    className={$.torta}
                  />
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className={$.title}>Presupuesto</h1>
      <div className={$.root}>
        <Divider className={$.divider} />
        {presupuesto ? rendering() : loadingRendering()}
      </div>
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    marginLeft: '1vw',
    marginBottom: '2rem',
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
  title: {
    marginLeft: '2.5vw',
  },

});
//hola