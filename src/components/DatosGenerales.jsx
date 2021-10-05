import React from 'react';
import { Footer } from './Footer';
import { proyectoPrueba } from '../constants/constants';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

export const DatosGenerales = () => {
    const $ = useStyles();

    return <>
        <div clasNane={$.root}>
            <h1>Datos Generales</h1>
            <Divider />
            <br />
            <div className={$.root}>
                <Card className={$.card}>
                <CardContent className={$}>
                <Typography>
                El sistema modular de inglés se inició en el año 2002 cuando
                existía la carrera de Licenciatura en el Idioma Inglés, formando
                parte de la Unidad Académica de ciencias de la Educación; luego
                para cumplir con la constitución, art. 124, fue responsabilidad de
                la universidad, proporcionar a los egresados de todas las carreras
                el conocimiento de un idioma extranjero. De ésta manera se
                incorporaron módulos de inglés a toda la población estudiantil. En
                la actualidad, la universidad cuenta con 5000 alumnos
                matriculados1 ; dieciocho carrereas que corresponden a 5 unidades
                académicas y 3500 egresados2 a los cuales hay que capacitarlos en
                el idioma inglés en tan solo 3 aulas con capacidad para 20
                personas y dos laboratorios para 30 personas, dentro del edificio
                donde funciona el sistema modular de Inglés; motivo por el cual se
                han visto obligados a utilizar aulas de otras unidades académicas,
                en otras edificaciones, en los horarios que éstas no se encuentren
                ocupadas recibiendo clases
                </Typography>
                </CardContent>
                </Card>
                <Card className={$.card}>
                <CardContent>
                    <Typography>
                    El sistema modular de inglés se inició en el año 2002 cuando
                    existía la carrera de Licenciatura en el Idioma Inglés, formando
                    parte de la Unidad Académica de ciencias de la Educación; luego
                    para cumplir con la constitución, art. 124, fue responsabilidad de
                    la universidad, proporcionar a los egresados de todas las carreras
                    el conocimiento de un idioma extranjero. De ésta manera se
                    incorporaron módulos de inglés a toda la población estudiantil. En
                    la actualidad, la universidad cuenta con 5000 alumnos
                    matriculados1 ; dieciocho carrereas que corresponden a 5 unidades
                    académicas y 3500 egresados2 a los cuales hay que capacitarlos en
                    el idioma inglés en tan solo 3 aulas con capacidad para 20
                    personas y dos laboratorios para 30 personas, dentro del edificio
                    donde funciona el sistema modular de Inglés; motivo por el cual se
                    han visto obligados a utilizar aulas de otras unidades académicas,
                    en otras edificaciones, en los horarios que éstas no se encuentren
                    ocupadas recibiendo clases
                    </Typography>
                </CardContent>
                </Card>
            </div>
            <Footer />
        </div>
    </>
}

const useStyles = makeStyles({
    root: {
      height: '100%',
      display: 'flex',
    },
    card: {
        width: '50%'
    }
  });