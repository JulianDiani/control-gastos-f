/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react';
import List from '@material-ui/core/List';
import logo from '../assets/logoUnahur.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function NavBar({ sideBarOptions }) {
  const $ = useStyles();
  console.log('sideBarOptions', sideBarOptions);
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
          {sideBarOptions.map(({ text, icon, path }, index) => (
            <ListItem
              divider={index === sideBarOptions.length - 1 ? false : true}
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
    width: '18vw',
    height: '100%',
    boxShadow: '10px 0 5px -5px grey',
    float: 'left',
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
