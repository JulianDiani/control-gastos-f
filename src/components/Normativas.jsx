import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import GetAppIcon from '@material-ui/icons/GetApp';
import pdf from '../assets/normativas.pdf';
import RCS217_21 from '../assets/Normativas/RCS 217_21 Definición agrupamientos investigación.pdf'
import RCS339_21 from '../assets/Normativas/RCS 339_21 Filiación institucional.pdf'
import RCS062_19 from '../assets/Normativas/RCS. 062_19 Estatuto del Comité Universitario de Bioética de la Universidad Nacional de Hurlingham.pdf'
import RCS021_18 from '../assets/Normativas/Reglamento Becas de Investigación RCS Nro. 021 18-04-2018.pdf'
import RCS087_17 from '../assets/Normativas/Reglamento de Investigación RCS. Nro. 087 20-12-2017.pdf'

export const Normativas = () => {
    const $ = useStyles();

    return (
        <>
            <div className={$.root}>
                <div className={$.titleAndButton}>
                    <h1>Normativas</h1>
                </div>
                <Card className={$.paper}>
                    <h2>Normativas de Investigación + Desarrollo</h2>
                    <Typography>
                        En esta sección podrá descargar las distintas normativas correspondientes a los proyectos de investigación y desarrollo.
                        <ul>
                            <li>
                                <b>RCS 217_21 Definición agrupamientos investigación</b>
                                <IconButton color="primary" href={RCS217_21} download="RCS217_21">
                                    <GetAppIcon />
                                </IconButton>
                            </li>
                            <li>
                                <b>RCS 339_21 Filiación institucional</b>
                                <IconButton color="primary" href={RCS339_21} download="RCS339_21">
                                    <GetAppIcon />
                                </IconButton>
                            </li>
                            <li>
                                <b>RCS 062_19 Estatuto del Comité Universitario de Bioética de la Universidad Nacional de Hurlingham</b>
                                <IconButton color="primary" href={RCS062_19} download="RCS062_19">
                                    <GetAppIcon />
                                </IconButton>
                            </li>
                            <li>
                                <b>RCS 021_18 Reglamento Becas de Investigación</b>
                                <IconButton color="primary" href={RCS021_18} download="RCS021_18">
                                    <GetAppIcon />
                                </IconButton>
                            </li>
                            <li>
                                <b>RCS 087_17 Reglamento de Investigación</b>
                                <IconButton color="primary" href={RCS087_17} download="RCS087_17">
                                    <GetAppIcon />
                                </IconButton>
                            </li>
                        </ul>
                    </Typography>
                </Card>
                <Footer />
            </div>
        </>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '98%'
    },
    paper: {
        paddingRight: '1rem',
        paddingLeft: '1rem'
    },
    divider: {
        marginTop: '2vh',
        marginBottom: '2vh',
    },
    titleAndButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botonDescarga: {
        height: '3rem',
        width: '10rem',
        marginTop: '1vh',
        backgroundColor: '#DCDCDC',
        color: '#505050',
        '&:hover': {
            color: '#FAFAFA',
            backgroundColor: '#62B5F6',
        },
    }
}));
