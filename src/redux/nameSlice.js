import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickName: [],
};

export const nameSlice = createSlice({
  name: "nickName",
  initialState,
  reducers: {
    setNickName: (state, action) => {
      state.nickName.push(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount, setNickName } =
  nameSlice.actions;

export default nameSlice.reducer;
