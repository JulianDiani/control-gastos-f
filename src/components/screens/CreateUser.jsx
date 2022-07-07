import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as moment from 'moment';
import { createUser } from '../../services/usuarios';
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
    loading: {
      width: '20rem',
      marginLeft: '30rem',
      marginTop: '3rem'
    }
}));

const CreateUser = () => {
    const classes = useStyles();
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [role, setRole] = useState(null);
    const [hasChanges,setHasChanges] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const timer = useRef();
    const canSubmit = name && lastName && username && password && birthDate && role;
    
    useEffect(() => {
      function setChanges(){
        timer.current = setTimeout(() =>{
          setLoading(true);
      }, 2000);
      setLoading(false);
      }
      if(hasChanges){
        setChanges();
      }
    },[hasChanges])
    
    const clearStates = () => {
      setName("")
      setLastName("")
      setUsername("")
      setPassword("")
      setBirthDate("")
      setRole("")
    }
    //Handle events
    const handleChange = (event,setState,isAutocomplete=false) => {
        if(isAutocomplete){
            setState(event);    
        }else{
            setState(event.target.value);
        }
    };
    
    const submitForm = async () => {
      const user = {
            nombre:name,
            apellido:lastName,
            rol: role,
            usuario:username,
            contraseña:password,
            fechaNacimiento: birthDate,
            avatar:"http:g00gle..com"
        }
        
        const  response = await createUser(user);    
        setHasChanges(true);
        clearStates();
        console.log(`Create-new-user-response: ${JSON.stringify(response)}`);    
    }
    return (
        <div>
            <h1>Crear usuario</h1>
            <div >
            <Paper className={classes.formContainer}>
                    <h2>Cargar datos</h2>
                    <TextField
                      id="outlined-name"
                      label="Nombre"
                      value={name}
                      onChange={(e) => handleChange(e,setName)}
                      variant="outlined"
                      className={classes.field}
                    />
                    <TextField
                      id="outlined-name"
                      label="Apellido"
                      value={lastName}
                      onChange={(e) => handleChange(e,setLastName)}
                      variant="outlined"
                      className={classes.field}
                    />
                    <TextField
                      id="outlined-name"
                      label="Usuario"
                      value={username}
                      onChange={(e) => handleChange(e,setUsername)}
                      variant="outlined"
                      className={classes.field}
                    />
                    <TextField
                      id="outlined-name"
                      label="Contraseña"
                      value={password}
                      type="password"
                      onChange={(e) => handleChange(e,setPassword)}
                      variant="outlined"
                      className={classes.field}
                    />
                    <TextField
                      id="outlined-name"
                      value={birthDate}
                      type="date"
                      onChange={(e) => handleChange(e,setBirthDate)}
                      variant="outlined"
                      className={classes.field}
                    />
                    <Autocomplete
                      id="outlined-name"
                      options={["Admin","User"]}
                      value={role}
                      onChange={(_,value) => handleChange(value,setRole,true)}
                      getOptionLabel={option => option}
                      getOptionSelected={(option, value) => option === value}
                      renderInput={(params) => <TextField {...params} label="rol"  variant="outlined" className={classes.field}/>}
                    />
                    
                    <Button
                        onClick={() => submitForm()}
                        color='primary'
                        variant='contained'
                        className={classes.submitButton}
                        disable={!canSubmit}
                    >
                        Crear usuario
                    </Button>
            </Paper >
            {!loading && (
              <Alert className={classes.loading}>Usuario cargado con exito</Alert>
            )
            }
            </div>
        </div>
      );
};

export default CreateUser;
