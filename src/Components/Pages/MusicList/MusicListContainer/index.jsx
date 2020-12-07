import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {MusicList} from "../../index";


let ContainerMusicList = ()=>{



    useEffect(()=>{

    },[])


    return(
        <MusicList/>
    )
}

let mapStateToProps =(state)=>{

    return{

    }
}


export default connect(mapStateToProps)(ContainerMusicList)
