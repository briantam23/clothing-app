import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';


const LOAD_CLOTHING = 'LOAD_CLOTHING';

const _loadClothing = clothing => ({
    type: LOAD_CLOTHING,
    clothing
})

export const loadClothing = () => (
    dispatch => (
        axios.get('/api/clothing')
            .then(res => res.data)
            .then(clothing => dispatch(_loadClothing(clothing)))
    )
)

const clothingReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_CLOTHING:
            return action.clothing;
        default:
            return state;
    }
}

const reducer = combineReducers({
    clothing: clothingReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;