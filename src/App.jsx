import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { DatosGenerales } from './components/DatosGenerales';
import { MisProyectos } from './components/MisProyectos';
import { Normativas } from './components/Normativas';
import {
  AssignmentInd,
  Help,
  Home,
  Info,
  AttachMoney,
} from '@material-ui/icons';
import { Presupuestos } from './components/Presupuestos';
import { Compras } from './components/Compras';
import { Proveedores } from './components/Proveedores';
import Login from './components/Login';
import { useState } from 'react';


export default function App() {
  const $ = useStyles();
  const [loggedIn, setLoggedIn] = useState();
  const sideBarOptions = [
    { text: 'Proyectos', icon: <Home />, path: '/datos' },
    { text: 'Presupuesto', icon: <AttachMoney />, path: '/presupuesto' },
    { text: 'Proveedores', icon: <AssignmentInd />, path: '/proveedores' },
    { text: 'Normativas I+D', icon: <Info />, path: '/' },
    { text: 'Soporte', icon: <Help />, path: '/' },
  ];

  return (
    //ToDo: Como quitar espacio sobrante en el borde derecho.
    <>
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Container maxWidth="xl" className={$.root}>
          <Router>
            <NavBar sideBarOptions={sideBarOptions} />
            <div className={$.container}>
              <Header setLoggedIn={setLoggedIn} />
              <div className={$.content}>
                <Switch>
                  <Route 
                    path="/login" 
                    component={Login}
                  />
                  <Route 
                    path="/" 
                    exact 
                    component={MisProyectos} 
                  />
                  <Route 
                    path="/proyectos" 
                    exact 
                    component={DatosGenerales} 
                  />
                  <Route
                    path="/proyectos/presupuestos"
                    exact
                    component={Presupuestos}
                  />
                  <Route 
                    path="/proyectos/compras" 
                    exact 
                    component={Compras} />
                  <Route
                    path="/proyectos/proveedores"
                    exact
                    component={Proveedores}
                  />
                  <Route path="/normativas" exact component={Normativas} />
                  <Route
                    path="/proyectos/normativas"
                    exact
                    component={Normativas}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </Container>
      )}
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1vh',
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '100%',
  },
  content: {
    paddingLeft: '2%',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '3vh',
  },
}));
