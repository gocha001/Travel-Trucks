import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, { getState, thunkApi }) => {
    try {
      const { filters, campers } = getState();
      const location = filters?.search?.location || "";
      const form = filters?.search?.form || "";
      const params = filters?.params || "";
      const page = campers?.page || 1;
      const { data } = await Api.get(
        `/campers?page=${page}&limit=4&location=${location}&form=${form}&${params}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkApi) => {
    try {
      const { data } = await Api.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
