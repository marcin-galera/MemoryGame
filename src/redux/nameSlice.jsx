import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nickName: [],
};

export const nameSlice = createSlice({
  name: "nickName",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setChangeTime: (state, action) => {
      state.nickName.map((e) => e.id === state.id && (e.time = action.payload));
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setNickName: (state, action) => {
      let newObj = [
        ...state.nickName,
        {
          nickName: action.payload.firstName,
          time: 0,
          id: action.payload.id,
        },
      ];

      return {
        ...state,
        nickName: newObj,
      };
    },
  },
});

export const { setNickName, setId, setChangeTime } = nameSlice.actions;

export default nameSlice.reducer;
