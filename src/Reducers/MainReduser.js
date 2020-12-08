import {getData} from "../DAL/Api";

const addMusicList = "ADD_MUSIC_LIST";

let InitialState = {
            musicList: null,
            apiKey: '5ac09c3f4136e9298d60de3703b130d7'
}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case addMusicList:
            return {
                ...state,
                musicList: action.musicList

            }
        default:
            return state;
    }
}
export default mainReducer;


let setMusicListCreator = (musicList)=>({type:addMusicList, musicList});


export let getMusicDataList =()=> async(dispatch,getState)=>{
    let apiKey = getState().data.apiKey;
    try{
        let data = await getData.getMusicList(apiKey )
        dispatch(setMusicListCreator(data.tracks.track))
    }catch(e){
        console.error(e)
    }


}




