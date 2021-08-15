import * as actions from '../actions/actionTypes'
const auth = (state=true, {type,payload} ) => {
    switch(type){
        case actions.AUTHENTICATE : return (!state)
        default : return state
    }
}

export default auth

