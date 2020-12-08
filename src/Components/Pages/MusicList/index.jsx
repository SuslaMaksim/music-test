import React from 'react';
import './MusicList.scss'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Card,CardMedia,CardContent} from '@material-ui/core';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    musicList:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px 30px 20px" ,
        width: "100%",
        backgroundColor: "white",
        minHeight: "450px",
        [theme.breakpoints.down('sm')]: {
            padding: '5px'
        },

},
    title:{
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
           marginTop: '15px'
        },
    },
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    media: {
        height: 140,

    },
    cardMedia:{
      display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    cover:{
        maxWidth: '400px',


    },
    cardTags:{
        padding: '5px',
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    types:{
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: 20
        },
    },
    tags:{
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-between'
        },
    }


}));




let ArtistList = ({artist})=>{

    let classes = useStyles()
    let src = artist.image.find(item => item.size === "large")

    return(
        <div className={classes.musicList}>
            <Typography className={classes.title} variant='h4' align='center'>{artist.name}</Typography>
            <Card className={classes.root}>

                <div className={classes.cardMedia}>
                    <CardMedia
                        className={classes.cover}
                        component="img"
                        alt="Contemplative Reptile"
                        image={src['#text']}
                        title="group"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            About {artist.name}:
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {artist.bio.summary}
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.cardTags}>
                    <Typography className={classes.types}  variant="h5" >Music Types : </Typography>
                    <div className={classes.tags} >
                        {artist.tags.tag.map(tag => <Button  href={tag.url} target='_blank' variant='outlined' key={tag.url}>{tag.name}</Button> )}
                    </div>
                </div>
            </Card>

        </div>
    )
}


export default ArtistList