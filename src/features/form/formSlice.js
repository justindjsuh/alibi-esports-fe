import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createTeam = createAsyncThunk(
  'signup/createTeam',
  async ({ teamName }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/teams/createTeam',
        {
          teamName,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addCaptain = createAsyncThunk(
  'signup/addCaptain',
  async ({
    captainFName,
    captainLName,
    captainInGameName,
    captainRank,
    captainDiscord,
    teamName,
  }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/players/addCaptain',
        {
          captainFName,
          captainLName,
          captainInGameName,
          captainRank,
          captainDiscord,
          teamName,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addPlayer2 = createAsyncThunk(
  'signup/addPlayer2',
  async ({ p2FName, p2LName, p2InGameName, p2Rank, teamName }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/players/addPlayer2',
        {
          p2FName,
          p2LName,
          p2InGameName,
          p2Rank,
          teamName,
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addPlayer3 = createAsyncThunk(
  'signup/addPlayer3',
  async ({ p3FName, p3LName, p3InGameName, p3Rank, teamName }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/players/addPlayer3',
        {
          p3FName,
          p3LName,
          p3InGameName,
          p3Rank,
          teamName,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addPlayer4 = createAsyncThunk(
  'signup/addPlayer4',
  async ({ p4FName, p4LName, p4InGameName, p4Rank, teamName }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/players/addPlayer4',
        {
          p4FName,
          p4LName,
          p4InGameName,
          p4Rank,
          teamName,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addPlayer5 = createAsyncThunk(
  'signup/addPlayer5',
  async ({ p5FName, p5LName, p5InGameName, p5Rank, teamName }) => {
    try {
      const { data } = await axios.post(
        'https://alibi-esports-api.onrender.com/api/players/addPlayer5',
        {
          p5FName,
          p5LName,
          p5InGameName,
          p5Rank,
          teamName,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    info: [],
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTeam.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
    builder.addCase(addCaptain.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
    builder.addCase(addPlayer2.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
    builder.addCase(addPlayer3.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
    builder.addCase(addPlayer4.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
    builder.addCase(addPlayer5.fulfilled, (state, action) => {
      state.info.push(action.payload);
    });
  },
});

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
