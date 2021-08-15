import * as actions from '../actions/actionTypes'

 const counter = (state=0, {type,payload}) => {
    switch(type){
        case actions.ADD : return (state+1)
        case actions.SUB : return (state-1)
        default : return state
    }
}

export default counter