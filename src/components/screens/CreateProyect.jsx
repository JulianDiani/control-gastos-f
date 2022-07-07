import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as moment from 'moment';
import { createUser } from '../../services/usuarios';
import { createProyecto } from '../../services/proyectos';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        boxShadow: '0 5px 10px -2px #333',
        backgroundColor: '#fafafa',
        padding: '0 1rem 1rem 1rem',
        margin: 'auto'
    },
    field : {
        margin: '0.5rem'
    },
    submitButton: {
        margin: '0.5rem'
    },
    column : {
        flexDirection: 'column'
    },
    loading: {
      width: '20rem',
      marginLeft: '30rem',
      marginTop: '3rem'
    }
}));

const CreateProyect = () => {
    const classes = useStyles();        
    const [titulo,setTitulo] = useState(null);
    const [tipo,setTipo] = useState(null);
    const [organismo,setOrganismo] = useState(null);
    const [lineaFinanciamiento,setLineaFinanciamiento] = useState(null);
    const [año,setAño] = useState(null);
    const [unidadAcademica,setUnidadAcademica] = useState(null);
    const [areaTematica,setAreaTematica] = useState(null);
    const [subsidio,setSubsidio] = useState(null);
    const [fechaInicio,setFechaInicio] = useState(null);
    const [fechaFin,setFechaFin] = useState(null);
    const [numeroExpediente,setNumeroExpediente] = useState(null);
    const [numeroResolucion,setNumeroResolucion] = useState(null);
    const [director,setDirector] = useState(null);
    const [codirector,setCodirector] = useState(null);
    const [usuario,setUsuario] = useState([]);
    const [hasChanges,setHasChanges] = useState(false);
    const [loadedProject, setLoadedProject] = useState(false);
    //Campos obligatorios
    const canSubmit = titulo && tipo && organismo && lineaFinanciamiento && año && unidadAcademica && areaTematica && subsidio && fechaInicio && fechaFin && numeroExpediente && numeroResolucion && director && codirector;
    const timer = useRef();

    useEffect(() => {
      function setChanges(){
        timer.current = setTimeout(() =>{
          setLoadedProject(false);
      }, 2000);
      setLoadedProject(true);
      }
      console.log("has changes", hasChanges);
      if(hasChanges){
        setChanges();
        setHasChanges(false);
      }
    },[hasChanges])


    //Handle events
    const handleChange = (event,setState,isAutocomplete=false) => {
        if(isAutocomplete){
            setState(event);    
        }else{
            setState(event.target.value);
        }
    };
    const clearStates = () => {
      setTitulo("");
      setTipo("");
      setOrganismo("");
      setLineaFinanciamiento("");
      setAño("");
      setUnidadAcademica("");
      setAreaTematica("");
      setSubsidio("");
      setFechaInicio("");
      setFechaFin("");
      setNumeroExpediente("");
      setNumeroResolucion("");
      setDirector("");
      setCodirector("");
      setUsuario("");
    }
    const submitForm = async () => {
      // const proyecto = {
        // titulo,
        // tipo,
        // organismo,
        // lineaFinanciamiento,
        // año,
        // unidadAcademica,
        // areaTematica,
        // subsidio,
        // fechaInicio,
        // fechaFin,
        // numeroExpediente,
        // numeroResolucion,
        // director,
        // codirector,
        // usuario,          
      // } 
      const proyecto = {
        titulo:"titulo",
        tipo:"tipo",
        organismo:"organismo",
        lineaFinanciamiento:"unahur",
        año:"2021/06/01",
        unidadAcademica:"unidadAcademica,",
        areaTematica:"areaTematica",
        subsidio:5777666,
        fechaInicio:"2021/06/01",
        fechaFin:"2022/06/01",
        numeroExpediente:1234,
        numeroResolucion: 82171,
        director:"Pedroza 3",
        codirector:"Mafia 3",
        usuario :"galosalerno",          
      } 
        const  response = await createProyecto(proyecto);
        setHasChanges(true);
        clearStates();
        console.log(`Create-new-proyect-response: ${JSON.stringify(response)}`);    
    }
    return (
        <div>
            <h1>Crear proyecto</h1>
            <div >
            <Paper className={classes.formContainer}>
                    <h2>Cargar datos</h2>
                    <div>
                        <div>
                            <TextField
                              id="outlined-name"
                              label="Titulo"
                              value={titulo}
                              onChange={(e) => handleChange(e,setTitulo)}
                              variant="outlined"
                              className={classes.field}
                            />
                            <TextField
                              id="outlined-name"
                              label="Tipo"
                              value={tipo}
                              onChange={(e) => handleChange(e,setTipo)}
                              variant="outlined"
                              className={classes.field}
                            />
                            <TextField
                              id="outlined-name"
                              label="Organismo"
                              value={organismo}
                              onChange={(e) => handleChange(e,setOrganismo)}
                              variant="outlined"
                              className={classes.field}
                            />
                            <TextField
                              id="outlined-name"
                              label="Linea de financiamiento"
                              value={lineaFinanciamiento}
                              type="año"
                              onChange={(e) => handleChange(e,setLineaFinanciamiento)}
                              variant="outlined"
                              className={classes.field}
                            />
                            <TextField
                              id="outlined-name"
                              label="año"
                              value={año}
                              type="text"
                              onChange={(e) => handleChange(e,setAño)}
                              variant="outlined"
                              className={classes.field}
                            />
                        </div>
                    <div>
                        <TextField
                          id="outlined-name"
                          label="Unidad academica"
                          value={unidadAcademica}
                          type="text"
                          onChange={(e) => handleChange(e,setUnidadAcademica)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Area tematica"
                          value={areaTematica}
                          type="text"
                          onChange={(e) => handleChange(e,setAreaTematica)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Subsidio"
                          value={subsidio}
                          type="text"
                          onChange={(e) => handleChange(e,setSubsidio)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Fecha inicio"
                          type="text"
                          value={fechaInicio}
                          onChange={(e) => handleChange(e,setFechaInicio)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Fecha fin"
                          value={fechaFin}
                          type="text"
                          onChange={(e) => handleChange(e,setFechaFin)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Numero expediente"
                          value={numeroExpediente}
                          type="text"
                          onChange={(e) => handleChange(e,setNumeroExpediente)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Numero resolucion"
                          value={numeroResolucion}
                          type="text"
                          onChange={(e) => handleChange(e,setNumeroResolucion)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Director"
                          value={director}
                          type="text"
                          onChange={(e) => handleChange(e,setDirector)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Codirector"
                          value={codirector}
                          type="text"
                          onChange={(e) => handleChange(e,setCodirector)}
                          variant="outlined"
                          className={classes.field}
                        />
                        <TextField
                          id="outlined-name"
                          label="Usuario responsable"
                          value={usuario}
                          type="text"
                          onChange={(e) => handleChange(e,setUsuario)}
                          variant="outlined"
                          className={classes.field}
                        />
                        </div>
                    </div>
                    <Button
                        onClick={() => submitForm()}
                        color='primary'
                        variant='contained'
                        className={classes.submitButton}
                        disable={!canSubmit}
                    >
                        Cargar proyecto
                    </Button>
            </Paper >
            {loadedProject && (
              <Alert className={classes.loading}>Proyecto cargado con exito</Alert>
            )
            }
            </div>
        </div>
      );
};

export default CreateProyect;

