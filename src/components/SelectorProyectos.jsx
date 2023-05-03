import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  box: {
    maxWidth: '25rem',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const SelectorProyectos = ({ handleSetProyect, proyectosEnCurso }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [proyectoActual, setProyectoActual] = useState(
    sessionStorage.getItem('idProyecto')
  );

  const handleChange = (e) => {
    handleSetProyect(e.target.value);
    setProyectoActual(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.box}>
      <Button className={classes.button} onClick={handleOpen}>
        Seleccionar proyecto a investigar
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Proyectos
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue={null}
          value={proyectoActual}
          onChange={handleChange}
        >
          <MenuItem value="">Ninguno</MenuItem>
          {proyectosEnCurso.map((proyecto) => (
            <MenuItem key={proyecto.id} value={proyecto.id}>
              <Typography noWrap> {proyecto.titulo}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
