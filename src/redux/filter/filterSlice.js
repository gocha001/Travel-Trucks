import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    location: "",
    form: "",
  },
  params: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.search.location = action.payload.location;
      state.search.form = action.payload.form;
      const query = Object.fromEntries(
        action.payload.equipment.map((item) => [item, true])
      );
      state.params = new URLSearchParams(query).toString();
    },
  },
});

export const filtersReducer = slice.reducer;

export const { changeFilter } = slice.actions;
