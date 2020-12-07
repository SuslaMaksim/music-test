import React from 'react';
import './MainPage.scss';
import { makeStyles} from '@material-ui/core/styles';
import {Typography,Box,Grid,Card,CardContent,CardMedia,Button} from "@material-ui/core"
import img from '../../../Assets/soundGruop.jpg';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title:{
        marginBottom: 20
    },
    root: {
        display: 'flex',
        minHeight: '200px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 150,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

let MainPage = ()=>{

    let classes = useStyles()

    return(
        <div className='mainpage'>
            <Typography className={classes.title} variant='h4' align='center'>Music Songs</Typography>
            <Box component='div'>
                <Grid container direction='row' >
                    <Grid lg={4} md={4} sm={6} xs = {12} container item justify='center'>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.cover}
                                image={img}
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Nmae group
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Name soung
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        link to info
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <Link to='/music/12' style={{textDecoration: 'none'}}>
                                        <Button  variant="contained" color="primary">Open Page</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Grid>


                </Grid>
            </Box>

        </div>
    )


}

export default MainPage;

