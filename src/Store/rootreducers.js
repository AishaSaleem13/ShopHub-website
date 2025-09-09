import { combineReducers } from 'redux'
import {CartSlice} from './cart'
import userToken from './usertoken'



const RootReducers =combineReducers({
    ReducerOne:CartSlice.reducer,
       tokenreducer:userToken.reducer
})
export default RootReducers