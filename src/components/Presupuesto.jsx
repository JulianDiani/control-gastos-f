import React from 'react';
import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { getPresupuesto } from '../services/proyectos.js';
import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const Presupuesto = () => {
  const $ = useStyles();
  const [presupuesto, setPresupuesto] = useState(null);
  const [hasError, setHasError] = useState(false); //Usando el hasError no me funcionaba - cambie el ternario por proyecto ? rendering() : loadingRendering() para que valide que no sea null proyecto

  useEffect(() => {
    async function fetchUsuarios() {
      const getFunction = getPresupuesto;
      try {
        const presupuesto = await getFunction();
        setPresupuesto(presupuesto);
      } catch (err) {
        setHasError(true);
        console.log('ERROR USE EFFECT : ' + err);
      }
    }
    fetchUsuarios();
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const BasicTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={$.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const loadingRendering = () => {
    return <Alert severity="info">Cargando...</Alert>;
  };

  const rendering = () => {
    return (
      <>
        <div className={$.root}>
          <Card className={$.card}>
            <CardContent>
              <BasicTable />
            </CardContent>
          </Card>
        </div>
      </>
    );
  };

  return (
    <>
      <div clasName={$.root}>
        <h1>Presupuesto</h1>
        <Divider className={$.divider} />
        {presupuesto ? rendering() : loadingRendering()}
        <Footer />
      </div>
    </>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  root: {
    height: '100%',
    display: 'flex',
  },
  card: {
    width: '50%',
    margin: '1rem',
  },
  divider: {
    marginBottom: '2rem',
  },
  item: {
    display: 'flex',
  },
  key: {
    fontWeight: 'bolder',
  },
  parrafo: {
    padding: '3rem',
    fontSize: '16px',
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: '3rem',
  },
  dropDown: {
    marginRight: '1rem',
    width: '10rem',
  },
  menuItem: {
    marginLeft: '1rem',
  },
});
