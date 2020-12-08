import { Grid} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../Search.scss'


const useStyles = makeStyles((theme) => ({
  gridItem:{
      padding: '12px'
  }
}));
let MusicItem = ({trackName,trackArtist})=>{
    let classes = useStyles()

    return(
        <Grid className={classes.gridItem} container item lg={4} md ={4} sm={6} xs={12} justify='center'>
          <div className='track'>
             <div >
                 <span className='track_title'>Tittle:</span>
                 <span className='track_description'>{trackName}</span>
             </div>
              <div >
                  <span  className='track_title'>Artist :</span>
                  <span className='track_description'>{trackArtist}</span>
              </div>
          </div>
        </Grid>

    )
}

export default MusicItem