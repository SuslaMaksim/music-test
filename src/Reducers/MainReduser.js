

let InitialState = {

            musicList: null

}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case 'addMusic':
            return {
                ...state,

            }
        default:
            return state;
    }
}
export default mainReducer;






