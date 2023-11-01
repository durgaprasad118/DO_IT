import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
  },
})
export const { updateName } = user.actions
export default user.reducer
