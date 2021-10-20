import React from 'react';
import List from '@material-ui/core/List';
import logo from '../assets/logoUnahur.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AssignmentInd, Help, Home, Info } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const $ = useStyles();
  let navbar;

  const sideBarOptions = [
    { text: 'Proyectos', icon: <Home />, path: '/proyectos' },
    { text: 'Proveedores', icon: <AssignmentInd />, path: '/proveedores' },
    { text: 'Normativas I+D', icon: <Info />, path: '/normativas' },
    { text: 'Soporte', icon: <Help />, path: '/soporte' },
  ];
  const proyects = [
    { text: 'Mis Proyectos', icon: <Home />, path: '/proyectos' },
    { text: 'Datos Generales', icon: <Home />, path: '/proyectos/datos' },
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
      <img
        src={logo}
        className={$.logo}
        alt="Logo Universidad Nacional de Hurlingham"
      ></img>
      <List className={$.list}>
        {navbar.map(({ text, icon, path }) => (
          <ListItem
            divider="true"
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
    height: '100vh',
    borderRight: '1px solid grey',
    boxShadow: '10px 0 5px -5px grey',
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
      color: '#62B5F6',
    },
  },
}));
