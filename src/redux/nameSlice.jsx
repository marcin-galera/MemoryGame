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
