import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    completedTasks: [],
    track: {
      isTracking: false,
      taskId: 0
    }
  },
  reducers: {
    getFullData(state, action) {
      state.tasks = action.payload
    },
    addTodo(state, action) {
      state.tasks.push({...action.payload, trackTime: 0})
    },
    removeTodo(state, action) {
      state.tasks = state.tasks.filter(task => task.id != action.payload)
    },
    toggleTodo(state, action) {
      const index = state.tasks.findIndex(task => task.id == action.payload.id)
      state.tasks[index] = {...action.payload, trackTime: state.tasks[index].trackTime}
    },
    completeTodo(state, action) {
      const task = state.tasks.find(task => task.id == action.payload.id)
      state.completedTasks.push({...task, completeTime: Date.now()})
      state.tasks = state.tasks.filter(task => task.id != action.payload.id)
    },
    removeCompleteTodo(state, action) {
      state.completedTasks = state.completedTasks.filter(task => task.id != action.payload)
    },
    returnTodo(state, action) {
      state.tasks.push(state.completedTasks.find(task => task.id == action.payload.id))
      state.completedTasks = state.completedTasks.filter(task => task.id != action.payload.id)

    },
    toggleTrack(state, action) {
      state.track.isTracking = !state.track.isTracking
    },
    getTrackId(state, action) {
      state.track.taskId = action.payload
    },
    endTrack(state, action) {
      const task = state.tasks.find(task => task.id == state.track.taskId);
      task.trackTime += action.payload
    },
    deleteGroupTask(state, action) {
      const task = state.tasks.find(task => task.groupName.id == action.payload);
      if(task){
        task.groupName = {}
      }
    },
  }

})

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  completeTodo,
  removeCompleteTodo,
  returnTodo,
  toggleTrack,
  getTrackId,
  endTrack,
  deleteGroupTask,
  getFullData,
  deleteGroupComplete
} = todoSlice.actions
export default todoSlice.reducer