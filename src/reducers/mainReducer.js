import { combineReducers } from "redux";
import  auth   from './auth'
import counter from './counter'

const reducer = combineReducers({
    auth,
    counter
})

export default reducer