import {getData} from "../DAL/Api";

const getArtist = "GET_ARTIST";


let InitialState = {

    artist: null,
    apiKey: '5ac09c3f4136e9298d60de3703b130d7'

}

let artistReducer = (state = InitialState, action)=>{
    switch(action.type){
        case getArtist:
            return {
                ...state,
                artist: action.artist

            }
        default:
            return state
    }
}
export default artistReducer;

let setArtistDataCreator = (artist)=>({type:getArtist, artist});

export let getArtistDataThunk =(artistName)=> async(dispatch,getState)=>{
    let apiKey = getState().dataArtist.apiKey;

        try{
            let data = await getData.getArtist(apiKey,artistName)
            dispatch(setArtistDataCreator(data.artist))
        }catch (e) {
            console.error(e)
        }

}






