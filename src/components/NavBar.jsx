import { React } from 'react';
import List from '@material-ui/core/List';
import logo from '../assets/logoUnahur.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Help, Home, Info, ShoppingCart, ImportContacts, Timeline, Contacts, Create } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const $ = useStyles();
  let navbar;

  const sideBarOptions = [
    { text: 'Mis Proyectos', icon: <ShareIcon />, path: '/' },
    { text: 'Normativas I+D', icon: <Info />, path: '/normativas' },
    { text: 'Soporte', icon: <Help />, path: '/soporte' },
  ];
  const proyects = [
    { text: 'Inicio', icon: <Home />, path: '/' },
    { text: 'Datos Generales', icon: <ImportContacts />, path: '/proyectos' },
    { text: 'Presupuestos', icon: <Timeline />, path: '/proyectos/presupuestos' },
    { text: 'Compras', icon: <ShoppingCart />, path: '/proyectos/compras' },
    // { text: 'Subsidios', icon: <AssignmentInd />, path: '/proyectos/subsidios' },
    { text: 'Crear nota', icon: <Create />, path: '/proyectos/nota' },
    { text: 'Proveedores', icon: <Contacts />, path: '/proyectos/proveedores' },
    { text: 'Normativas I+D', icon: <Info />, path: '/proyectos/normativas' },
  ];
  let location = useLocation();

  if (location.pathname.startsWith('/proyectos')) {
    navbar = proyects;
  } else {
    navbar = sideBarOptions;
  }
  return (
    <Grid>
      <div className={$.navbar}>
        <Link to={'/'}>
          <img
            src={logo}
            className={$.logo}
            alt="Logo Universidad Nacional de Hurlingham"
          />
        </Link>
        <List className={$.list}>
          {navbar.map(({ text, icon, path }, index) => (
            <ListItem
              divider={index === navbar.length - 1 ? false : true}
              className={$.option}
              button={true}
              key={text}
              component={Link}
              to={path}
            >
              {icon}
              <ListItemText primary={text} sx={{ ml: 2 }} />
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  navbar: {
    width: '15vw',
    height: '100%',
    boxShadow: '10px 0 5px -5px grey',
    float: 'left'
  },
  logo: {
    height: '55px',
    padding: '2%',
  },
  list: {
    color: '#505050',
  },
  option: {
    '&:hover': {
      backgroundColor: '#62B5F6',
      color: '#FAFAFA',
    },
  },
}));
