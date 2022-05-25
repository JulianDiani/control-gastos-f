import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Tooltip,
} from '@material-ui/core';
import { postCompra, getGastosPorRubro } from '../services/compras.js';
import PublishIcon from '@material-ui/icons/Publish';
import { getPresupuesto, getRubros } from '../services/presupuestos.js';
import { validateField } from '../utils/validaciones';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '50vw',
    height: '80%',
    boxShadow: '0px 0px 5px 1px grey',
    padding: theme.spacing(2, 4, 3),
    top: '55%',
    left: '55%',
    transform: 'translate(-50%,-50%)',
    overflow: 'scroll',
  },
  inputs: {
    width: '100%',
    paddingBottom: '1rem',
    display: 'flex',
  },
  item: {
    paddingLeft: '1rem',
  },
  button: {
    display: 'flex',
    justifyContent: 'right',
    marginTop: '6.5rem',
  },
  secondRow: {
    display: 'grid',
    width: '30%',
  },
  cargarFactura: {
    display: 'flex',
    marginTop: '1rem'
  },
  descripcion: {
    display: 'grid',
    marginTop: '1.5rem',
  },
  multiLineInput: {
    backgroundColor: '#fafafa',
    borderRadius: '5px',
    width: '90%',
  },
  proveedor: {
    marginTop: '1.5rem',
    display: 'flex'
  },
  uploadIcon: {
    marginBlock: 'auto',
    margin: '1rem',
    marginTop: '2rem',
    '&:hover': {
      color: '#62B5F6',
    },
  },
  buttonList: {
    display: 'block',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  subrubro: {
    marginTop: '1.25rem',
  },
  divider: {
    //width: '40rem',
    marginLeft: '0rem',
    marginBottom: '1.5rem',
  },
  proveedorForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
    marginTop: '2rem'
  },
  buttonNewProveedor: {
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: 'green'
    },
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  inputForm: {
    marginBottom: '2rem'
  }
}));

export default function PopUpCompras(props) {
  const $ = useStyles();

  const [rubro, setRubro] = useState('');
  const [subrubro, setSubrubro] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [proveedor, setProveedor] = useState('');
  const [monto, setMonto] = useState(0);
  const [nombre, setNombre] = useState('');
  const [disponibleRubro, setDisponibleRubro] = useState('');
  const [validateFields, setValidateFields] = useState(true);
  const canSubmit = rubro && subrubro && monto && fecha && proveedor;
  const [errorMonto, setErrorMonto] = useState(false);
  const [errorSubrubro, setErrorSubrubro] = useState(false);
  const [newProveedor, setNewProveedor] = useState(null);
  //Agregar nuevo proveedor
  const [newProveedorRubro, setNewProveedorRubro] = useState(null);
  const [newProveedorNombre, setNewProveedorNombre] = useState(null);
  const [newProveedorCuit, setNewProveedorCuit] = useState(null);

  const canFinish = rubro && subrubro && monto && fecha && proveedor;
  const canAddProveedor = newProveedorRubro && newProveedorNombre && newProveedorCuit;
  useEffect(() => {
    async function fetchGastos() {
      const gastos = await getGastosPorRubro(rubro);
      const responsePresupuesto = await getPresupuesto();
      const presupuesto = responsePresupuesto;
      const dineroDisponible = calcularDineroDisponiblePorRubro(
        presupuesto,
        gastos.totalGastado,
        rubro
      );

      setDisponibleRubro(dineroDisponible);
    }
    try {
      fetchGastos();
    } catch (err) {
      console.log('ERROR FETCH GASTOS:' + err.message);
    }
  }, [rubro]); //Ver mejor practica para no pegarle tanto al back.

  const calcularDineroDisponiblePorRubro = (presupuestoTotal, gastosRubro, rubro) => rubro ? presupuestoTotal[rubro.toLowerCase()] - gastosRubro : 0;

  const submitForm = async () => {
    props.state(false);
    let data = {
      fecha: fecha,
      rubro: rubro,
      subrubro: subrubro,
      numeroCompra: 80,
      proveedor: proveedor,
      monto: monto,
      estado: 'Comprado',
      factura: 'factura-054',
      nombre: nombre,
    };
    const res = await postCompra(data);
    props.stateNewCompra(true);
    console.log('[PopUpCompras] submitForm response: ', res);
  };

  const submitHandle = (handle, value) => {
    handle(value);
    console.log(value);
  };

  const handleClose = () => {
    props.state(false);
  };

  //New proveedor handlers
  const handleAddProveedor = () => {
    setNewProveedor(!newProveedor);
  }
  const handleNewProveedor = (value, setState) => {
    setState(value);
  }
  const sendDataNewProveedor = () => {
    const data = {
      cuit: newProveedorCuit,
      nombre: newProveedorNombre,
      rubro: newProveedorRubro
    }
    console.log("Data to post", data);
  }

  const RubroSelected = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setRubro(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <Button className={classes.buttonList} onClick={handleOpen} />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Rubro</InputLabel>

          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={rubro}
            onChange={handleChange}
          >
            {getRubros().map((r, idx) => (
              <MenuItem value={r} key={idx}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    );
  };

  return (
    <>
      <div className={$.modal}>
        <h2>Realizar Pedido de Compra</h2>
        <Divider />
        <div className={$.inputs}>
          <RubroSelected />
          <TextField
            label="Subrubro"
            onBlur={(e) => validateField("subrubro", e.target.value, setErrorSubrubro)}
            onChange={(e) => submitHandle(setSubrubro, e.target.value)}
            className={$.subrubro}
            error={errorSubrubro}
          />
        </div>
        <Typography>
          Cuentas con $<b>{disponibleRubro}</b> para este rubro
        </Typography>
        <br />
        <Divider class={$.divider} />
        <div className={$.secondRow}>
          <TextField
            label="Fecha"
            onChange={(e) => submitHandle(setFecha, e.target.value)}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className={$.cargarFactura}>
            <TextField
              label="Monto"
              onChange={(e) => submitHandle(setMonto, e.target.value)}
              onBlur={(e) => validateField("monto", e.target.value, setErrorMonto)}
              error={errorMonto}
            />
            <PublishIcon className={$.uploadIcon} />
          </div>
        </div>
        <div className={$.descripcion}>
          <Typography variant="h5">Descripcion</Typography>
          <br />
          <TextField
            label="La compra cuenta con los siguientes objetos/servicios"
            multiline
            rows={6}
            className={$.multiLineInput}
            onChange={(e) => submitHandle(setNombre, e.target.value)}
          />
        </div>
        <div className={$.proveedor}>
          <Autocomplete
            id="proveedores"
            options={proveedores}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Proveedores" />}
            onChange={(e, value) => submitHandle(setProveedor, value.name)}
          />
          <PublishIcon className={$.uploadIcon} />
        </div>
        {newProveedor && (
          <div className={$.proveedorForm}>
            <span className={$.label}>Nombre completo</span>
            <TextField
              onChange={(e) => handleNewProveedor(e.target.value, setNewProveedorNombre)}
              placeholder="ingrese el Nombre completo"
              className={$.inputForm}
            />
            <span className={$.label}>Cuit</span>
            <TextField
              onChange={(e) => handleNewProveedor(e.target.value, setNewProveedorCuit)}
              placeholder="ingrese el CUIT"
              className={$.inputForm}
            />
            <span className={$.label}>Rubro</span>
            <TextField
              onChange={(e) => handleNewProveedor(e.target.value, setNewProveedorRubro)}
              placeholder="ingrese el rubro"
              className={$.inputForm}
            />
            <Button
              onClick={sendDataNewProveedor}
              disabled={!canAddProveedor}
            >
              Agregar proveedor
            </Button>
          </div>
        )}
        <div className={$.button}>
          <Button color="primary" className={$.botones} onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" disabled={!canSubmit} onClick={submitForm}>
            Finalizar Pedido de Compra
          </Button>
        </div>
      </div>
    </>
  );
}

const proveedores = [{ name: "Pepito" }, { name: "Josesito" }, { name: "Ruben" }]; //PASAR A SERVICE
