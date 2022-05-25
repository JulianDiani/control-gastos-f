import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import PasswordField from 'material-ui-password-field';
import { getUser } from '../services/usuarios';
import { Messages } from '../constants/messages';
import Alert from '@material-ui/lab/Alert';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import '../styles/styles.css';
import isologo from '../assets/unahur-isologo.png';

const Login = (props) => {
  //Hooks
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      const loggedIn = sessionStorage.getItem("loggedIn");
      // const loggedIn = "true"; cuando no anda el back
      loggedIn === "true" ? props.setLoggedIn(true) : props.setLoggedIn(false);
    }
    fetch();
  }, [])

  //Styles
  const $ = useStyles();

  //form handling
  const submitHandle = (handleFunction, value) => {
    handleFunction(value);
  };

  //checking username and password 
  const checkedLogin = (user) => {
    return user?.data?.contraseña === props.password && props.password !== undefined; //user? es para hacerlo safeNull y que no rompa.
  };

  //set logedin true or false - @TODO use recoil.
  const sendLoginData = async () => {
    const user = await getUser(props.userName);
    const checked = checkedLogin(user);
    setError(!checked); //if checked is false error is true.
    props.setLoggedIn(checked)  //true = login ok | false = login fail
    sessionStorage.setItem("username", props.userName);
    sessionStorage.setItem("loggedIn", checked);
  }
  //it triggers by pressing the enter key
  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      //13 is enterKey charCode
      sendLoginData();
    }
  };

  //header rendering
  const Header = () => {
    return (
      <div className="header">
        <img
          className={$.logoUnahur}
          src={isologo} //@TODO conseguir imagen original del logo con prensa
          alt=""
        />
      </div>
    );
  };

  //left wallpallper rendering
  const Wallpallper = () => {
    return (
      <div className="wallpaperContainer">

      </div>
    );
  };

  //form rendering
  const Form = () => {
    return (
      <div className="formContainer">
        {Header()}
        <div className="login">
          <div className={$.iconContainer}>
            <AccountCircleRoundedIcon className={$.logoUsuario} />
          </div>
          <Typography className={$.title}>{Messages.bienvenido}</Typography>
          <CardContent className={$.grid}>
            {error && (
              <Alert severity="error" className={$.alert}>
                {Messages.passwordIncorrecta}
              </Alert>
            )}
            <FormControl className={$.inputLabel}>
              <InputLabel>{Messages.usuario}</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                type="text"
                onChange={(e) => submitHandle(props.setUserName, e.target.value)}
                onKeyPress={handleKeypress} //Para que funcione el onClick del button tocando enter desde aca
              />
            </FormControl>
            <FormControl className={$.inputLabel}>
              <InputLabel>{Messages.contraseña}</InputLabel>
              <PasswordField
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={(e) => submitHandle(props.setPassword, e.target.value)}
                onKeyPress={handleKeypress} //Para que funcione el onClick del button tocando enter desde aca
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button className={$.button} size="medium" onClick={sendLoginData}>
              {Messages.iniciarSession}
            </Button>
          </CardActions>
          <div className={$.olvidoPassword}>
            <a href="http://www.google.com">{Messages.olvidoPassword}</a>
          </div>
        </div>
      </div>
    );
  };

  //MAIN RENDERING
  return (
    <div className="flex-container">
      <div>{Wallpallper()}</div>
      <div>{Form()}</div>
    </div>
  );
};

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  login: {
    marginTop: '8rem',
    marginLeft: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoUsuario: {
    width: '7rem',
    height: '7rem',
    color: '#5AA123',
  },
  iconContainer: {
    width: '20rem',
    textAlign: 'center',
  },
  logoUnahur: {
    marginLeft: '1rem',
    marginTop: '1rem',
    width: '15rem',
    height: '4rem',
  },
  inputLabel: {
    width: '20rem',
    marginBottom: '1.5rem',
    justifySelf: 'center'
  },
  grid: {
    display: 'grid',
    width: '40rem',
  },
  button: {
    width: '20rem',
    backgroundColor: '#5AA123',
    borderRadius: '4rem',
    color: '#FFFFFF',
    '&:hover': {
      color: '#5AA123',
    },
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20rem',
  },
  olvidoPassword: {
    marginTop: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20rem',
  },
  alert: {
    marginBottom: '1rem',
    width: '20rem'
  },
});

export default Login;
