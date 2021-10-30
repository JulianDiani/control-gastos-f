import React,{ useState, useEffect } from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getProyecto } from '../services/proyectos.js';
import Alert from '@material-ui/lab/Alert';

export const DatosGenerales = () => {
  const $ = useStyles();

  const [proyecto, setProyecto] = useState(null);
  const [hasError, setHasError] = useState(false); //Usando el hasError no me funcionaba - cambie el ternario por proyecto ? rendering() : loadingRendering() para que valide que no sea null proyecto
  const [anchorEl, setAnchorEl] = useState(null);

  //useEffect para traer la proyecto del proyecto de la api.
  useEffect(() => {
    async function fetchUsuarios() {
      const getFunction = getProyecto;
      try {
        const proyecto = await getFunction();
        setProyecto(proyecto);
      } catch (err) {
        setHasError(true);
        console.log('ERROR USE EFFECT : ' + err);
      }
    }
    fetchUsuarios();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            primary={'Subsidio: ' + proyecto.subsidio}
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
        <ListItem className={$.dropDown} button>
          <ListItemText primary={'Integrantes'} />
          <ExpandMoreIcon onClick={handleClick} sx={{ ml: 1 }} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={$.menuItem}
          >
            {proyecto.integrantes.map((a) => (
              <MenuItem onClick={handleClose} key={a}>
                {a}
              </MenuItem>
            ))}
          </Menu>
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
      <div clasName={$.root}>
        <h1>Datos Generales</h1>
        <Divider className={$.divider} />
        {proyecto ? rendering() : loadingRendering()}
        <Footer />
      </div>
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
