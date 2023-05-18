import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
}));

const ComprasModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [aprobado, setAprobado] = React.useState(true);

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

  return (
    <div>
      <Button 
        color="primary"
        onClick={handleOpenAprobado}
        ><CheckCircleOutlineIcon />
      </Button>
      <Button 
        color="secondary"
        onClick={handleOpenRechazado}
        ><HighlightOffIcon />
      </Button>
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
                mx="auto"
                ><Button><CheckIcon color="primary"/></Button></Box>
                <Box item 
                mx="auto"
                ><Button><ClearIcon color="secondary"/></Button></Box>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ComprasModal;