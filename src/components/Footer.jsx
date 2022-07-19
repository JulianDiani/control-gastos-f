/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';

export const Footer = () => {
  const $ = useStyles();

  return (
    <>
      <div className={$.footer}>
        <Divider />
        <br />
        <Typography variant="body2" className={$.texto}>
          Esta aplicación ha sido realizada por estudiantes de la Licenciatura
          en Informática de la UNaHur.
        </Typography>

        <Typography variant="body2" className={$.texto}>
          Si encontraste algún error o querés ver el código fuente, podés
          acceder a la organización de{' '}
          <a href="https://github.com/ControlGastosSubsidios">GitHub</a> del
          proyecto.
        </Typography>
        <br />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    left: 0,
    width: '100%',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginTop: '1.5rem',
  },
  texto: {
    color: theme.palette.text.secondary,
  },
}));
