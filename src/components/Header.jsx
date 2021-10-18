import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Person, Mail } from '@material-ui/icons';
import { usuarioPrueba } from '../constants/constants';

export default function Header() {
  const $ = useStyles()

  return (  
    <div className={$.header}>
      <div className={$.whiteBar}>
        <Mail className={$.icon} />
        <Person className={$.icon}/>
        <p>{usuarioPrueba.email}</p>
      </div> 
      <div className={$.greenBar}>
      </div> 
    </div>
  );
}

const useStyles = makeStyles(() => ({
  header: {
    height: '10vh',
    width: '82vw'
  },
  logo: {
    height: '55px', 
    width: '216px'
  },
  whiteBar: {
    backgroundColor: "white",
    width: '82vw', 
    height: "5vh",
    display:' flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '1vw'
  },
  greenBar: {
    backgroundColor: "#5AA123",
    boxShadow: "0 5px 2px -2px gray",
    width: '82vw', 
    height: "5vh",
    position: 'absolute',
    alignItems: 'center',
    paddingLeft: '1.5vw',
    color: '#fafafa',
    fontSize: '2vh'
  },
  icon: {
    color: '#5AA123',
  }
}));
