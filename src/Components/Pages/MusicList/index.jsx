import React from 'react';
import './MusicList.scss'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Card,CardMedia,CardContent} from '@material-ui/core';
import img from '../../../Assets/soundGruop.jpg'

const useStyles = makeStyles((theme) => ({
    title:{
        marginBottom: 20
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    cover:{
        width: '100%',
        height: '100%'
    }


}));




let MusicList = ()=>{
    let classes = useStyles()

    return(
        <div className='musiclist'>
            <Typography className={classes.title} variant='h4' align='center'>Name of Group</Typography>

            <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        component="img"
                        alt="Contemplative Reptile"
                        image={img}
                        title="group"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>

            </Card>

        </div>
    )
}

let mapStateToProps =(state)=>{

    return{

    }
}


export default  MusicList;
