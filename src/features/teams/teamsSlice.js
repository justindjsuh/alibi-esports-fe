import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTeams = createAsyncThunk('teams/fetchTeams', async () => {
  const { data } = await axios.get('http://localhost:3500/api/teams');
  return data;
});

export const teamsSlice = createSlice({
  name: 'allTeams',
  initialState: {
    teamList: [],
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeams.fulfilled, (state, action) => {
      state.status = 'FULFILLED';
      state.teamList = action.payload;
    });
  },
});

export const selectTeams = (state) => state.teams;

export default teamsSlice.reducer;
