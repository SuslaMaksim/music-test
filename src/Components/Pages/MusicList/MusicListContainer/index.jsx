import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {ArtistList} from "../../index";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import {getArtistDataThunk} from '../../../../Reducers/ArtistReducer';
import load from '../../../../Assets/loading.gif'


let ContainerMusicList = ({match,getArtistDataThunk,artist})=>{


    let artistName = match.params.name;

    useEffect(()=>{
        getArtistDataThunk(artistName)
    },[getArtistDataThunk,artistName ])


    return(
        <>
        {artist
            ?
            <ArtistList artist = {artist}/>
            : <div className='loading'>
                <img src={load} alt="loading"/>
              </div>
        }
      </>
    )
}

let mapStateToProps =(state)=>{

    return{
        artist: state.dataArtist.artist
    }
}


export default compose(
    connect(mapStateToProps,{getArtistDataThunk}),
    withRouter,
)(ContainerMusicList)
