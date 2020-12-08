
import {getData} from '../DAL/Api'
const setMusic = "SET_MUSIC";
const setLoading = "SET_LOADING"

let InitialState = {

    musicList: null,
    loading: false,
    apiKey: '5ac09c3f4136e9298d60de3703b130d7'

}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case setMusic:
            return {
                ...state,
                musicList: action.musicList
            }
        case setLoading:
            return {
                ...state,
                loading: action.loading
            }
        default: return state
    }
}
export default mainReducer;


let setMusicListFromSearch = (musicList)=>({type:setMusic, musicList});
let setLoadingCreator = (loading)=>({type:setLoading, loading});


export let setMusicFromSearch = (nameTrack)=> async (dispatch,getstate)=>{
    let apiKey = getstate().dataSearch.apiKey
    dispatch(setLoadingCreator(true))
    try{
        let data = await getData.getTrackFromSearch(apiKey,nameTrack);

        dispatch(setMusicListFromSearch(data.results.trackmatches.track))
        dispatch(setLoadingCreator(false))
    }catch (e) {

        dispatch(setLoadingCreator(false))
    }


}






