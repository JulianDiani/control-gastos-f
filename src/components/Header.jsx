import React, { useState } from 'react';
import {
  Button,
  makeStyles,
  MenuItem,
  Menu
} from '@material-ui/core';
import { Person, Mail,ExpandMore } from '@material-ui/icons';
import { usuarioPrueba } from '../constants/constants';

export default function Header(props) {
  const $ = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    props.setLoggedIn(false);
  };
  
  const openConfig = () => {  
    return (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={React.cloneElement(<ExpandMore/>)}
          >
          <Mail className={$.icon} />
            <Person className={$.icon} />
            <h5>{usuarioPrueba.email}</h5>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className={$.menu}
          >
            <MenuItem className={$.menuItem} onClick={handleClose}>Configuracion</MenuItem>
            <MenuItem className={$.menuItem} divider={true} onClick={handleClose}>Mi perfil</MenuItem>
            <MenuItem className={$.menuItem} onClick={handleLogOut}>Cerrar Session</MenuItem>
          </Menu>
        </div>
      );
  };
  return (
    <div className={$.header}>
      <div className={$.whiteBar}>
        {openConfig()}
      </div>
      <div className={$.greenBar}></div>
    </div>
  );
}

const useStyles = makeStyles(() => ({

  header: {
    height: '10vh',
    width: '82vw',
  },
  menu:{
    marginTop: '2.7rem',
    width: '30rem',
    marginLeft: '0.5rem',
  },
  menuItem:{
    width:'15rem'
  },
  logo: {
    height: '55px',
    width: '216px',
  },
  whiteBar: {
    backgroundColor: '#fafafa',
    width: '82vw',
    height: '5vh',
    display: ' flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '1vw',
  },
  greenBar: {
    background: 'linear-gradient(to left , #9BC76D, #80B05C ,#5AA123)', 
    boxShadow: '0 5px 2px -2px gray',
    height: '8vh',
    width: '100%',
    alignItems: 'center',
    paddingLeft: '1.5vw',
    color: '#fafafa',
    fontSize: '2vh',
  },
  icon: {
    color: '#5AA123',
  },
}));
