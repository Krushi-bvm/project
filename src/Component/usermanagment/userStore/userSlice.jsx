import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],

};
const userSlice = createSlice({
  name: "user",
  initialState, // Pass initialState here
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, ...updatedUserData } = action.payload;
      console.log(action.payload ,'adasfagsgfsgs')
      const userIndex = state.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedUserData };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  }
});



export const { addUser, editUser ,deleteUser} = userSlice.actions;
export default userSlice.reducer;
