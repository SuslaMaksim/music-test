import React from 'react';
import './Search.scss';
import {Typography,FormControl,Grid,OutlinedInput,InputLabel,InputAdornment,IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DirectionsIcon from '@material-ui/icons/Directions';
import MusicItem from "./MusicItem/MusicItem";

const useStyles = makeStyles((theme) => ({
    title:{
        marginBottom: 20
    },
    searchForm:{
    minWidth:' 500px',
    margin: "30px 0px 50px 0px",
        [theme.breakpoints.down('sm')]: {
            minWidth:'300px'
        },
    },
    error:{
        position: "absolute",
        color: "tomato",
        bottom: "-25px",
        transition: "all .5s linear",
        [theme.breakpoints.down('sm')]: {
            bottom: "-35px",
        },
    }
}));


let Search = ({setValue,value,setTrackName,error,musicList})=>{

    let classes = useStyles()
    return(
        <div className='search'>
            <Typography className={classes.title} variant='h4' align='center'>Enter song what do you want to find</Typography>
            <div className={classes.searchForm}>
                <form>
                    <FormControl  variant="outlined" fullWidth>
                        {error && <p className={classes.error}> Field is required, please Enter some track name</p>}
                        <InputLabel htmlFor="cearch">Search</InputLabel>
                        <OutlinedInput
                            onChange={(e)=>setValue(e.target.value)}
                            value = {value}
                            id="cearch"
                            type= 'text'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={(e)=>setTrackName(e)} type ="onSubmit" color="primary" className={classes.iconButton} >
                                        <DirectionsIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </form>
            </div>
            <div className='search__result'>
                <Grid container>
                    {musicList && musicList.map(track => <MusicItem key = {track.url}
                                                                    trackArtist={track.artist}
                                                                    trackName={track.name}
                    />)}

                </Grid>

            </div>

        </div>
    )
}

export default Search;