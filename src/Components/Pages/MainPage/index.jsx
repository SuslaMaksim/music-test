import React from 'react';
import './MainPage.scss';
import { makeStyles} from '@material-ui/core/styles';
import ListCard from "./ListCard/index";
import {Typography,Box,Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: 20
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    }


}));

let MainPage = ({musicList})=>{

    let classes = useStyles()

    return(
        <div className='mainpage'>
            <Typography className={classes.title} variant='h4' align='center'>Music Songs</Typography>
            <Box component='div'>
                <Grid container direction='row'  justify='space-between'>
                    {musicList && musicList.map(item=> <ListCard
                        key={item.listeners}
                        artistName = {item.artist.name}
                        songName = {item.name}
                        link = {item.url}
                        img ={item.image}
                    /> ) }
                </Grid>
            </Box>

        </div>
    )


}

export default MainPage;

