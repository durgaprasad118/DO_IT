import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    naam: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.naam = action.payload
    },
  },
})
export const { updateName } = userSlice.actions
export default userSlice.reducer
