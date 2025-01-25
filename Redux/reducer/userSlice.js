import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    accessToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
    },
    logoutUser: (state) => {
      state.userId = null;
      state.accessToken = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
