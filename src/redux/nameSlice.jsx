import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nickName: [],
};

export const nameSlice = createSlice({
  name: "nickName",
  initialState,
  reducers: {
    setChangeTime: (state, action) => {
      state.nickName.map((e) => e.id === state.id && (e.time = action.payload));
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setNickName: (state, action) => {
      state.nickName.push({
        nickName: action.payload.firstName,
        time: 123,
        id: action.payload.id,
      });
    },
  },
});

export const { setNickName, setId, setChangeTime } = nameSlice.actions;

export default nameSlice.reducer;
