import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import {Search} from "../../index";
import {setMusicFromSearch} from '../../../../Reducers/SearchReduser'


let SearchContainer= ({setMusicFromSearch, loading,musicList})=>{

    let[value,setValue] = useState('')
    let[error,setError] = useState(false)

    let setTrackName = (e)=>{
        e.preventDefault()
        if(value === '') {
            setError(true)
        }else{
            setError(false)
            setMusicFromSearch(value)
        }
    }



    return(
            <Search setValue = {setValue}
                    setTrackName = {setTrackName}
                    value = {value}
                    musicList = {musicList}
                    loading = {loading}
                    error = {error}
            />
    )
}

let mapStateToProps =(state)=>{

    return{
        musicList: state.dataSearch.musicList,
        loading: state.dataSearch.loading
    }
}


export default connect(mapStateToProps,{setMusicFromSearch})(SearchContainer)
