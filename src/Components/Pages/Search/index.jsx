import React from 'react';
import './Search.scss';
import {Typography,FormControl,Grid,OutlinedInput,InputLabel,InputAdornment,IconButton,Card,CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    title:{
        marginBottom: 20
    },
}));


let Search = ()=>{

    let classes = useStyles()
    return(
        <div className='search'>
            <Typography className={classes.title} variant='h4' align='center'>Enter song what do you want to find</Typography>
            <div className='search__form'>
                <form>
                    <FormControl  variant="outlined" fullWidth>
                        <InputLabel htmlFor="cearch">Search</InputLabel>
                        <OutlinedInput
                            id="cearch"
                            type= 'text'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton  color="primary" className={classes.iconButton} >
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
                    <Grid container item lg={3} md ={3} sm={4} xs={6} justify='center'>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Название трека
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Исполнитель
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Search;