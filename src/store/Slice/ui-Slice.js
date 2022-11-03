import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../Actions/fetchcart-actions";

const initialState = {
  img: "",
  show: false,
  manoProducts: [],
  notifications: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    getData(state, action) {
      state.img = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.manoProducts = action.payload;
      state.notifications = {
        status: "success",
        title: "Success!",
        message: "Cart data sent successfully!",
      };
    },
    [fetchData.rejected]: (state, action) => {
      state.notifications = {
        status: "error",
        title: "Error!",
        message: action.error.message || "Fetch failed",
      };
    },
    [fetchData.pending]: (state) => {
      state.notifications = {
        status: "pending",
        title: "Pending ...",
        message: "Loading...",
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
