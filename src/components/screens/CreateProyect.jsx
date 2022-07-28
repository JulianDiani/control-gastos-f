import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Paper } from '@material-ui/core';
import { createProyecto } from '../../services/proyectos';
import Alert from '@material-ui/lab/Alert';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { validateField } from '../../utils/validaciones';
import * as moment from 'moment';
const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    boxShadow: '0 5px 10px -2px #333',
    backgroundColor: '#fafafa',
    padding: '0 1rem 1rem 1rem',
    margin: 'auto',
    borderTop: '1rem solid #5AA123',
    borderRadius: '17px 17px 0 0',
  },
  field: {
    margin: '0.5rem',
  },
  submitButton: {
    margin: '0.5rem',
    backgroundColor: '#5AA123',
  },
  column: {
    flexDirection: 'column',
  },
  loading: {
    width: '20rem',
    marginLeft: '30rem',
    marginTop: '3rem',
  },
  error: {
    width: '25rem',
    marginLeft: '30rem',
    marginTop: '3rem',
  },
  grid: {
    display: 'grid',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem',
    width: '97%',
  },
}));

const CreateProyect = () => {
  const classes = useStyles();
  const [titulo, setTitulo] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [organismo, setOrganismo] = useState(null);
  const [lineaFinanciamiento, setLineaFinanciamiento] = useState(null);
  const [año, setAño] = useState(null);
  const [unidadAcademica, setUnidadAcademica] = useState(null);
  const [areaTematica, setAreaTematica] = useState(null);
  const [subsidio, setSubsidio] = useState(null);
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [numeroExpediente, setNumeroExpediente] = useState(null);
  const [numeroResolucion, setNumeroResolucion] = useState(null);
  const [numeroProyecto, setNumeroProyecto] = useState(null);
  const [director, setDirector] = useState(null);
  const [codirector, setCodirector] = useState(null);
  const [usuario, setUsuario] = useState([]);
  const [hasChanges, setHasChanges] = useState(false);
  const [loadedProject, setLoadedProject] = useState(false);
  const [errorNumeroExpediente, setErrorNumeroExpediente] = useState(false);
  const [errorNumeroResolucion, setErrorNumeroResolucion] = useState(false);
  const [errorNumeroProyecto, setErrorNumeroProyecto] = useState(false);
  const [añoValue, setAñoValue] = useState(); //Fix to datapicker - se meustra un año menos que el valor que tiene el state
  const [hasError, setHasError] = useState(false);
  //Campos obligatorios
  const canSubmit =
    titulo &&
    tipo &&
    organismo &&
    lineaFinanciamiento &&
    año &&
    unidadAcademica &&
    areaTematica &&
    subsidio &&
    fechaInicio &&
    fechaFin &&
    numeroExpediente &&
    numeroResolucion &&
    director &&
    codirector;
  const timer = useRef();

  useEffect(() => {
    function setChanges() {
      timer.current = setTimeout(() => {
        setLoadedProject(false);
      }, 2000);
      setLoadedProject(true);
    }
    
    if (hasChanges) {
      setChanges();
      setHasChanges(false);
    }
  }, [hasChanges]);

  useEffect(() => {
    function setError() {
      timer.current = setTimeout(() => {
        setHasError(false);
      }, 2000);
      setHasError(true);
    }
    if (hasError) {
      setError();
      setHasChanges(false);
    }
  }, [hasError]);

  //Handle events
  const handleChange = (event, setState, isAutocomplete = false) => {
    
    if (isAutocomplete) {
      setState(event);
    } else {
      setState(event.target.value);
    }
  };

  const handlePicker = (event, setDate, onlyYear = false) => {
    if (onlyYear) {
      const year = moment(event).format('YYYY');
      const yearToValue = moment(year);
      
      setDate(year);
      setAñoValue(yearToValue);
    } else {
      const date = moment(event).format('YYYY-MM-DD');
      setDate(date);
    }
  };
  const clearStates = () => {
    setTitulo('');
    setTipo('');
    setOrganismo('');
    setLineaFinanciamiento('');
    setAño('');
    setUnidadAcademica('');
    setAreaTematica('');
    setSubsidio('');
    setFechaInicio('');
    setFechaFin('');
    setNumeroExpediente('');
    setNumeroResolucion('');
    setDirector('');
    setCodirector('');
    setUsuario('');
  };
  const submitForm = async () => {
    const proyecto = {
      titulo,
      tipo,
      organismo,
      lineaFinanciamiento,
      año,
      unidadAcademica,
      areaTematica,
      subsidio,
      fechaInicio,
      fechaFin,
      numeroExpediente,
      numeroResolucion,
      numeroProyecto,
      director,
      codirector,
      usuario,
    };
    //DATA TO TEST SUBMIT.
    // const proyecto = {
    // titulo:"titulo",
    // tipo:"tipo",
    // organismo:"organismo",
    // lineaFinanciamiento:"unahur",
    // año:"2021/06/01",
    // unidadAcademica:"unidadAcademica,",
    // areaTematica:"areaTematica",
    // subsidio:5777666,
    // fechaInicio:"2021/06/01",
    // fechaFin:"2022/06/01",
    // numeroExpediente:1234,
    // numeroResolucion: 82171,
    // director:"Pedroza 3",
    // codirector:"Mafia 3",
    // usuario :"galosalerno",
    // }
    const objectValidate = Object.values(proyecto);
    if (objectValidate.some((value) => !value)) {
      setHasError(true);
      return;
    } //Checkear que no haya ningun null
    const response = await createProyecto(proyecto);
    setHasChanges(true);
    clearStates();
    console.log(`Create-new-proyect-response: ${JSON.stringify(response)}`);
  };
  return (
    <div>
      <h1>Crear proyecto</h1>
      <div>
        <Paper className={classes.formContainer}>
          <h2>Cargar datos</h2>
          <div>
            <div className={classes.grid}>
              <TextField
                id="outlined-name"
                label="Título"
                value={titulo}
                onChange={(e) => handleChange(e, setTitulo)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Tipo"
                value={tipo}
                onChange={(e) => handleChange(e, setTipo)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Organismo"
                value={organismo}
                onChange={(e) => handleChange(e, setOrganismo)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Línea de financiamiento"
                value={lineaFinanciamiento}
                type="text"
                onChange={(e) => handleChange(e, setLineaFinanciamiento)}
                variant="outlined"
                className={classes.field}
              />
            </div>
            <div className={classes.grid}>
              <TextField
                id="outlined-name"
                label="Unidad académica"
                value={unidadAcademica}
                type="text"
                onChange={(e) => handleChange(e, setUnidadAcademica)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Área temática"
                value={areaTematica}
                type="text"
                onChange={(e) => handleChange(e, setAreaTematica)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Subsidio"
                value={subsidio}
                type="text"
                onChange={(e) => handleChange(e, setSubsidio)}
                variant="outlined"
                className={classes.field}
              />
              <Divider />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={classes.flex}>
                  <KeyboardDatePicker
                    id="date-picker-dialog"
                    label="Fecha inicio"
                    format="MM/dd/yyyy"
                    minDate={moment()}
                    value={fechaInicio}
                    onChange={(e) => handlePicker(e, setFechaInicio)}
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardDatePicker
                    id="date-picker-dialog"
                    label="Fecha fin"
                    format="MM/dd/yyyy"
                    minDate={moment().add(6, 'month')} //6 meses es el minimo de duracion de un proyecto
                    value={fechaFin}
                    onChange={(e) => handlePicker(e, setFechaFin)}
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardDatePicker
                    // margin="normal"
                    id="date-picker-dialog"
                    label="Año"
                    views={['year']}
                    format="yyyy"
                    minDate={moment()}
                    value={añoValue}
                    onChange={(e) => handlePicker(e, setAño, true)}
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </div>
              </MuiPickersUtilsProvider>
              <Divider />
              <div className={classes.flex}>
                <TextField
                  id="outlined-name"
                  label="Número expediente"
                  value={numeroExpediente}
                  onBlur={(e) =>
                    validateField(
                      'int',
                      e.target.value,
                      setErrorNumeroExpediente
                    )
                  }
                  type="text"
                  onChange={(e) => handleChange(e, setNumeroExpediente)}
                  variant="outlined"
                  className={classes.field}
                  error={errorNumeroExpediente}
                />
                <TextField
                  id="outlined-name"
                  label="Número resolución"
                  value={numeroResolucion}
                  onBlur={(e) =>
                    validateField(
                      'int',
                      e.target.value,
                      setErrorNumeroResolucion
                    )
                  }
                  type="text"
                  onChange={(e) => handleChange(e, setNumeroResolucion)}
                  variant="outlined"
                  className={classes.field}
                  error={errorNumeroResolucion}
                />
                <TextField
                  id="outlined-name"
                  label="Número proyecto"
                  value={numeroProyecto}
                  onBlur={(e) =>
                    validateField('int', e.target.value, setErrorNumeroProyecto)
                  }
                  type="text"
                  onChange={(e) => handleChange(e, setNumeroProyecto)}
                  variant="outlined"
                  className={classes.field}
                  error={errorNumeroProyecto}
                />
              </div>
              <TextField
                id="outlined-name"
                label="Director"
                value={director}
                type="text"
                onChange={(e) => handleChange(e, setDirector)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Codirector"
                value={codirector}
                type="text"
                onChange={(e) => handleChange(e, setCodirector)}
                variant="outlined"
                className={classes.field}
              />
              <TextField
                id="outlined-name"
                label="Usuario responsable"
                value={usuario}
                type="text"
                onChange={(e) => handleChange(e, setUsuario)}
                variant="outlined"
                className={classes.field}
              />
            </div>
          </div>
          <Button
            onClick={() => submitForm()}
            color="primary"
            variant="contained"
            className={classes.submitButton}
            disable={!canSubmit}
          >
            Cargar proyecto
          </Button>
        </Paper>
        {loadedProject && (
          <Alert className={classes.loading}>Proyecto cargado con exito</Alert>
        )}
        {hasError && (
          <Alert severity="error" className={classes.error}>
            Hubo un problema al procesar su solicitud
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CreateProyect;
