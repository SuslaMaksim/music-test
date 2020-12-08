import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Typography,Grid,Card,CardContent,CardMedia,Button} from "@material-ui/core"
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    grid:{
        padding: 12,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '320px'
        },


    },

    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '100%',
        height: '200px'
    },
    details:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',


    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5px',

    },
    button:{
        fontSize: '12px',
    [theme.breakpoints.down('sm')]: {
        padding: '3px'
    },

}

}));

let ListCard = ({img,artistName,songName,link })=>{

    let classes = useStyles()
    let src = img.find(item => item.size === "medium")
    return(

        <Grid lg={3} md={4} sm={6} xs = {12} container item justify='center' className={classes.grid}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    title="Live from space album cover"
                    image={src['#text']}
                />
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {artistName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {songName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Button className={classes.button} href={link} target='_blank' variant="contained" color="primary">To last.fm Info</Button>
                        <Link to={`/music/${artistName}`} style={{textDecoration: 'none'}}>
                            <Button className={classes.button}  variant="contained" color="primary">About song</Button>
                        </Link>
                    </div>

            </Card>
        </Grid>
    )


}

export default ListCard;

