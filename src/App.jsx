import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { DatosGenerales } from './components/DatosGenerales';
import {MisProyectos} from './components/MisProyectos';
import { AssignmentInd, Help, Home, Info } from '@material-ui/icons';

export default function App() {
  const $ = useStyles();

  const sideBarOptions = [
    { text: 'Proyectos', icon: <Home />,path:"/datos" },
    { text: 'Proveedores', icon: <AssignmentInd />,path:"/" },
    { text: 'Normativas I+D', icon: <Info />,path:"/" },
    { text: 'Soporte', icon: <Help />,path:"/" }
  ]

  return (
    <Container maxWidth="xl" className={$.root}>
      <Router>
      <NavBar sideBarOptions = {sideBarOptions}/>
      <div className={$.container}>
        <Header />
          <div className={$.content}>
            <Switch>
              <Route path="/" component={MisProyectos} />
              <Route path="/datos" component={DatosGenerales} />
            </Switch>
          </div>
        </div>
      </Router>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1vh',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    display:'flex', 
    flexDirection: 'column',
  },
  content: {
    paddingLeft: '2%',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '3vh'
  }
}));