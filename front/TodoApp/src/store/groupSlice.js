import {createSlice} from "@reduxjs/toolkit";


const groupSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [],
  },
  reducers: {
    addGroup(state, action) {
      state.groups.push({...action.payload, track: 0})
    },
    deleteGroup(state, action) {
      state.groups = state.groups.filter(group => group.idGroup != action.payload)
    },
    addTrackTime(state, action) {

    }
  }
})

export const {addGroup, deleteGroup, addTrackTime} = groupSlice.actions
export default groupSlice.reducer