import { Footer } from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import GetAppIcon from '@material-ui/icons/GetApp';
import pdf from '../assets/normativas.pdf';

export const Normativas = () => {
    const $ = useStyles();

    return (
        <>
            <div className={$.root}>
                <div className={$.titleAndButton}>
                    <h1>Normativas</h1>
                    <Button
                        startIcon={<GetAppIcon />}
                        variant="contained"
                        className={$.botonDescarga}
                        href={pdf}
                        download="normativa"
                    >
                        Descargar
                    </Button>
                </div>
                <Card>
                    <Paper className={$.paper}>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <Typography>
                            Suspendisse convallis arcu in molestie molestie. Integer eu lacus sed lectus porttitor viverra at eu magna. Quisque dolor lacus, varius vel tristique id, interdum nec lorem. Quisque at elementum enim. In urna eros, pellentesque ut mi ut, aliquet scelerisque elit. Mauris lacinia magna tortor, eget vehicula risus faucibus et. Etiam commodo diam vel ex commodo, maximus pulvinar neque vehicula. Phasellus lobortis sodales magna, et cursus quam pellentesque eget. Pellentesque fermentum elit orci, ut ultricies turpis tempus eu. Aenean finibus tincidunt tortor, in fermentum nibh dictum vel.
                        </Typography>
                        <Divider className={$.divider} />
                        <h2>Quisque sit amet consectetur magna</h2>
                        <Typography>
                            Cras vitae quam quis felis accumsan congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nunc felis, venenatis vitae ullamcorper quis, dictum sit amet dui. Aliquam sed bibendum justo. Duis vitae sem dignissim, lacinia eros vel, dictum lacus. Pellentesque ultrices risus dolor, ut mattis libero dignissim ac. Donec sit amet sapien pharetra, tristique urna et, consequat neque. Pellentesque libero dolor, maximus quis facilisis non, aliquet id turpis. Donec rutrum nisl in felis porta, quis interdum massa lacinia. Aenean dolor lacus, consectetur a consectetur ac, vestibulum non ligula.
                        </Typography>
                        <Divider className={$.divider} />
                        <h2>Fusce eget velit eget massa pharetra pellentesque</h2>
                        <Typography>
                            Aenean vestibulum sed massa eget lacinia. Nullam a diam quis arcu pretium aliquet eu eu est. Aenean tellus libero, vehicula sed pulvinar et, sollicitudin non augue. Vestibulum non arcu tellus. Maecenas fermentum lacus aliquet urna bibendum, nec fermentum arcu dapibus. Donec lectus sapien, egestas quis enim eu, molestie tristique enim. Vestibulum cursus, enim non bibendum euismod, orci urna gravida lacus, et facilisis libero augue et felis. Pellentesque non sem sit amet mauris fringilla suscipit quis vitae risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec volutpat ullamcorper arcu, vitae vulputate turpis dapibus ut. Cras ac mauris maximus, dapibus nisi ac, auctor orci. Nam molestie nisl tortor, vel imperdiet ipsum pretium eget. Sed sed ex tellus. Sed erat diam, blandit eu tempus at, blandit a diam. Maecenas eu est blandit, blandit magna non, feugiat nisl.
                        </Typography>
                        <Divider className={$.divider} />
                        <h2>Donec vel lacinia justo</h2>
                        <Typography>
                            Duis sit amet dolor ipsum. Mauris fringilla est eu lorem semper auctor. Duis eu ullamcorper elit, vitae efficitur odio. Donec id scelerisque massa. Sed eget purus non mi hendrerit rhoncus. Maecenas feugiat, magna vitae euismod pretium, ligula lectus sollicitudin risus, a rhoncus erat metus et lorem. Duis luctus tempor urna, sodales consectetur enim maximus eu. Cras non odio quis risus laoreet varius ac a velit. Aenean eget justo ultrices, accumsan eros sit amet, tincidunt lacus. Sed dictum sit amet dui a rhoncus.
                        </Typography>
                        <Divider className={$.divider} />
                        <h2>Nam non vehicula sapien</h2>
                        <Typography>
                            Nulla in sollicitudin turpis. Sed id elementum nisl. Duis semper purus vel massa blandit molestie. Suspendisse potenti. Mauris placerat lorem dolor, hendrerit dignissim urna viverra quis. Curabitur vestibulum viverra euismod. Nullam vel tempor ex. Curabitur enim nisl, aliquet vitae facilisis non, semper hendrerit dui. Sed blandit, neque non viverra aliquam, odio nulla fermentum nunc, et convallis arcu nisi eget quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus accumsan, massa a lobortis tempus, elit turpis dictum leo, ut eleifend tellus leo vitae eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a auctor nulla, nec semper ligula.
                        </Typography>
                    </Paper>
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
        flexDirection: 'column'
    },
    paper: {
        padding: '1rem'
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
