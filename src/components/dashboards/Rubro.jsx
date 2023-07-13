import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const Rubro = (props) => {

  return (
    <Grid item xs>
      <TextField
        id={props.rubro.id}
        label={props.rubro.nombre}
        type="number"
        onBlur={(event) => {
          props.handleSubsidio(
            {
              id: event.target.id,
              monto: event.target.value !== '' ? event.target.value : "0",
              error: event.target.value === '' ? true : false,
              message: event.target.value === '' ? "solo números" : ""
            })
        }}
        variant="outlined"
        className={props.className}
        error={props.rubro.error}
        helperText={props.rubro.message}
      />
    </Grid>
  );
};

export default Rubro;