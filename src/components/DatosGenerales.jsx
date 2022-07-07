import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { getProyecto, getProyectoById } from '../services/proyectos.js';
import Alert from '@material-ui/lab/Alert';
import { formatPrice } from '../utils/validaciones';

export const DatosGenerales = () => {
  const $ = useStyles();

  const [proyecto, setProyecto] = useState(null);
  // const userName = sessionStorage.getItem("username");
  const idProyecto = sessionStorage.getItem("idProyecto");
  //useEffect para traer la proyecto del proyecto de la api.
  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const proyecto = await getProyectoById(idProyecto); //Tiene que ser por ID la busqueda
        setProyecto(proyecto[0]);
      } catch (err) {
        console.log('[DatosGenerales Component] ERROR : ' + err);
      }
    }
    fetchUsuarios();
  }, []);

  const loadingRendering = () => {
    return <Alert severity="info">Cargando...</Alert>;
  };

  const DatosList = () => {
    return (
      <List>
        <ListItem className={$.item}>
          <ListItemText primary={'Titulo: ' + proyecto.titulo} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Tipo: ' + proyecto.tipo} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Organismo: ' + proyecto.organismo}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Linea de financiamiento: ' + proyecto.lineaFinanciamiento}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Año de convocatoria: ' + proyecto.año}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Unidad Academica: ' + proyecto.unidadAcademica}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Area: ' + proyecto.areaTematica}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Subsidio: ' + formatPrice(proyecto.subsidio)}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Fecha Inicio: ' + proyecto.fechaInicio}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Fecha Fin: ' + proyecto.fechaFin}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={'Usuario: ' + proyecto.usuario}
            sx={{ ml: 2 }}
          />
        </ListItem>
      </List>
    );
  };
  const rendering = () => {
    return (
      <>
        <div className={$.root}>
          <Card className={$.card}>
            <CardContent>
              <DatosList />
            </CardContent>
          </Card>
          <Card className={$.card}>
            <CardContent>
              <List>
                <Typography className={$.title}>Resumen:</Typography>
                <Typography paragraph={true} className={$.parrafo}>
                  {proyecto.resumen}
                </Typography>
              </List>
            </CardContent>
          </Card>
        </div>
      </>
    );
  };

  return (
    <>
      <h1>Datos Generales</h1>
      <div className={$.root}>
        <Divider className={$.divider} />
        {proyecto ? rendering() : loadingRendering()}
      </div>
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
  },
  card: {
    width: '50%',
    margin: '1rem',
    maxHeight: '45rem',
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
    marginTop: '46rem',
    marginLeft: '30rem'
  },
});
