import { combineReducers } from 'redux'
import {CartSlice} from './cart'
import { usrtoken } from './usertoken'


const RootReducers =combineReducers({
    ReducerOne:CartSlice.reducer,
       tokenreducer:usrtoken.reducer
})
export default RootReducers