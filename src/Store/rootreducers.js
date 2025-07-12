import { combineReducers } from 'redux'
import {CartSlice} from './cart'


const RootReducers =combineReducers({
    ReducerOne:CartSlice.reducer,

})
export default RootReducers