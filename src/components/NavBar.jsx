/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import List from '@material-ui/core/List';
import logo from '../assets/logoUnahur.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function NavBar({ sideBarOptions }) {
  const $ = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Grid>
      <div className={$.navbar}>
        <Box className={$.imageContainer} component={Link} to={'/'}>
          <img
            src={logo}
            className={$.logo}
            alt="Logo Universidad Nacional de Hurlingham"
          />
        </Box>
        <List className={$.list}>
          {sideBarOptions.map(({ text, icon, path }, index) => (
            <ListItem
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              divider={index === sideBarOptions.length - 1 ? false : true}
              className={selectedIndex === index ? $.optionSelected : $.option}
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
    width: '13rem',
    height: '100%',
    boxShadow: '10px 0 5px -5px grey',
    float: 'left',
  },
  logo: {
    width: '160px',
    height: 'auto',
  },
  list: {
    color: '#505050',
  },
  option: {
    '&:hover': {
      backgroundColor: '#9BC76D',
      color: '#FAFAFA',
    },
  },
  optionSelected: {
    backgroundColor: '#5AA123 !important',
    color: '#FAFAFA',
  },
  imageContainer: {
    display: 'flex',
    padding: '0.5rem',
    justifyContent: 'center',
  },
}));
