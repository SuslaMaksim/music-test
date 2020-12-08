import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {MainPage} from "../../index";
import {getMusicDataList} from '../../../../Reducers/MainReduser'
import loading from '../../../../Assets/loading.gif'


let MainPageContainer = ({getMusicDataList, musicList})=>{


    useEffect(()=>{
        getMusicDataList()
    },[getMusicDataList])

    return(
        <>
        {musicList
            ?
            <MainPage musicList={musicList}/>
            :<div className='loading'>
                <img src={loading } alt="loading"/>
            </div>
        }
            </>

    )
}

let mapStateToProps =(state)=>{
    return{
        musicList: state.data.musicList
    }
}


export default connect(mapStateToProps,{getMusicDataList})(MainPageContainer);