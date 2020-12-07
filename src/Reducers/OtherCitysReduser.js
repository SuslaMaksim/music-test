

let InitialState = {

                music:'ss'

}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case 'sss':
            return {
                ...state
            }
        default: return state
    }
}
export default mainReducer;



