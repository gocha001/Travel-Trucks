import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./camperOperations";
import { changeFilter } from "../filter/filterSlice";

const initialState = {
  items: [],
  camperId: {},
  loading: false,
  error: false,
  page: 1,
  total: 1,
  favorites: [],
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    handleLoadMore: (state) => {
      if (Math.ceil(state.total / 4) > state.page) {
        state.page = state.page + 1;
      }
      return;
    },
    addFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.favorites.some((fav) => fav.id === item.id);
      if (!exists) {
        state.favorites.push(item);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
    viewFavorite: (state) => {
      state.items = state.favorites;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(getCamperById.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.camperId = {};
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.camperId = action.payload;
        state.loading = false;
      })
      .addCase(getCamperById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(changeFilter, (state) => {
        state.page = 1;
      });
  },
});

export const campersReducer = slice.reducer;

export const { handleLoadMore } = slice.actions;

export const { addFavorite, removeFavorite, viewFavorite } = slice.actions;
