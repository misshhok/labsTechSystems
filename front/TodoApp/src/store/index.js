import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import groupSlice from "./groupSlice";
export default configureStore({
  reducer:{
    tasks: todoReducer,
    groups: groupSlice,
  }
})