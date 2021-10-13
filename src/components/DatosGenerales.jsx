import React from 'react';
import { Footer } from './Footer';
import { proyectoPrueba } from '../constants/constants';
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

export const DatosGenerales = () => {
  const $ = useStyles();
  const data = proyectoPrueba;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const DatosList = () => {
    return (
      <List>
        <ListItem className={$.item} button>
          <ListItemText primary={'Titulo: ' + data.titulo} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Tipo: ' + data.tipo} sx={{ ml: 1 }} />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Organismo: ' + data.organismo}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Linea de financiamiento: ' + data.lineaFinanciamiento}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Año de convocatoria: ' + data.año}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Unidad Academica: ' + data.unidadAcademica}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Area: ' + data.areaTematica} sx={{ ml: 2 }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Subsidio: ' + data.subsidio} sx={{ ml: 2 }} />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Fecha Inicio: ' + data.fechaInicio}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={'Fecha Fin: ' + data.fechaFin}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem className={$.dropDown} button>
          <ListItemText  primary={'Integrantes'} />
          <ExpandMoreIcon onClick={handleClick} sx={{ml:1}}/>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={$.menuItem}
          >
            {data.integrantes.map((a) => (
              <MenuItem onClick={handleClose} key={a}>
                {a}
              </MenuItem>
            ))}
          </Menu>
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
            <CardContent>
              <DatosList />
            </CardContent>
          </Card>
          <Card className={$.card}>
            <CardContent>
              <List>
                <Typography className={$.title}>Resumen:</Typography>
                <Typography paragraph={true} className={$.parrafo}>
                  {data.resumen}
                </Typography>
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
    marginLeft: '1rem'
  }
});
