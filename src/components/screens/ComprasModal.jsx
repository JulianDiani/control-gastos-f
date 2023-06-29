import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box} from '@material-ui/core';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { putCompra } from '../../services/compras';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttons: {
    margin: 20
  }
}));

const ComprasModal = ( {idCompra, changeCompra} ) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [aprobado, setAprobado] = React.useState(null);

  const handleOpenAprobado = () => {
    setAprobado(true);
    setOpen(true);
  };
  const handleOpenRechazado = () => {
    setAprobado(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function cambiarEstado(nuevoEstado) {
    const bodyEstado = {estado: nuevoEstado};
    const res = await putCompra(idCompra, bodyEstado);
    if(res) {
      changeCompra(true);
    }
  }

  return (
    <div>
      <Grid container spacing={12} className={classes.buttons}>
          <Box item 
          mx="auto"
          >
            <Button 
            variant="contained"
            color="primary"
            onClick={handleOpenAprobado}
            >Aprobar
            </Button>
          </Box>
          <Box item 
          mx="auto"
          >
            <Button 
              variant="contained"
              color="secondary"
              onClick={handleOpenRechazado}
              >Rechazar
            </Button>
          </Box>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4>¿Está seguro que desea {aprobado ? 'APROBAR' : 'RECHAZAR'} la compra?</h4>
            <Grid container spacing={12}>
                <Box item 
                mx="auto">
                  <Button
                    onClick={() => {
                      cambiarEstado(aprobado ? "Aprobado" : "Rechazado");
                      handleClose();
                    }}>
                    <CheckIcon color="primary"/>
                  </Button>
                </Box>
                <Box item 
                mx="auto">
                  <Button
                    onClick={handleClose}>
                      <ClearIcon color="secondary"/>
                  </Button>
                </Box>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ComprasModal;