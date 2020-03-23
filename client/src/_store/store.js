
import {
    combineReducers,
    createStore,
    applyMiddleware
} from "redux";

import {
    logger,
    promise 
} from './middleware'

import loginR from '../_reducer/loginR';
import spesiesR from '../_reducer/spesiesR';
import registerR from '../_reducer/registerR';
import petR from '../_reducer/petR';


const reducer = combineReducers({
    loginR,
    spesiesR,
    registerR,
    petR
})

const store = createStore(reducer, applyMiddleware(logger, promise))

export default store