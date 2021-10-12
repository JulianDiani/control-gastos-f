import React from 'react';
import { Footer } from './Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { proyectoPrueba } from '../constants/constants';

export const DatosGenerales = () => {
  const $ = useStyles();
  const data = proyectoPrueba; 
  
  //Como poner en bold el campo 'Titulo' ?? fontWeight: "bold" no me funciono...
  //Mejor practica usar Typographic o directamente el ListITemText con el atributo primary ??
  const DatosList = () => {
    return (
      <List>
        <ListItem  className={$.item} button>
          <ListItemText>
              <Typography>Titulo:</Typography>
          </ListItemText>
          <ListItemText primary={data.titulo} />
        </ListItem>
        <ListItem  button>
          <ListItemText primary={'Tipo: ' + data.tipo} sx={{ ml: 2 }} />
        </ListItem>
        <ListItem  button>
          <ListItemText primary={'Organismo: ' + data.organismo} sx={{ ml: 2 }} />
        </ListItem>
        <ListItem  button>
          <ListItemText primary={'Linea de financiamiento: ' + data.lineaFinanciamiento} sx={{ ml: 2 }} />
        </ListItem>
        <ListItem  button>
          <ListItemText primary={'Año de convocatoria: ' + data.lineaFinanciamiento} sx={{ ml: 2 }} />
        </ListItem>
      </List>
    );
  };

  return (
    <>
      <div clasName={$.root}>
        <h1>Datos Generales</h1>
        <Divider className={$.divider} />

        <div className={$.root}>
          <Card className={$.card}>
            <CardContent className={$}>
              <DatosList/> 
            </CardContent>
          </Card>
          <Card className={$.card}>
            <CardContent>
              <List>
                <ListItem  button>
                  <ListItemText primary={'text'} sx={{ ml: 2 }} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </div>
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
  },
  divider: {
    marginBottom: '2rem',
  },
  item:{
      display: 'flex',
  },
  key:{
    fontWeight: 'bolder'
  }
});
