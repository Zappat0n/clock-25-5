import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice ({
  name: 'display',
  initialState: {
    title: 'Session',
    minsSession: 25,
    minsBreak: 5,
    mins: 25,
    secs: 0,
    playing: false,
  },
  reducers: {
    incrementSession: (state) => {
      if (!state.playing) {
        state.minsSession += 1;
        if (state.title === 'Session') { update(state, true) }
      }
    },
    decrementSession: (state) => {
      if (!state.playing && state.minsSession > 1) {
        state.minsSession -= 1;
        if (state.title === 'Session') { update(state, true) }
      }
    },
    incrementBreak: (state) => {
      if (!state.playing) {
        state.minsBreak += 1;
        if (state.title === 'Break') { update(state, false) }
      }
    },
    decrementBreak: (state) => {
      if (!state.playing && state.minsBreak > 1) {
        state.minsBreak -= 1;
        if (state.title === 'Break') { update(state, false) }
      }
    },
    decrementSec: state => {
      if (state.secs !== 0) {
        state.secs -= 1;
      } else {
        if (state.mins !== 0) {
          state.secs = 59;
          state.mins = state.mins - 1;
        } else {
          state.secs = 59;
          if (state.title === 'Session') {
            state.title = 'Break';
            state.mins = state.minsBreak - 1;
          } else {
            state.title = 'Session';
            state.mins = state.minsSession - 1;
          }
        }
      }
    },
    changeTitle: state => {state.title = state.title === 'Session' ? 'Break' : 'Session'},
    changePlaying: state => {state.playing = !state.playing},
  }
});

const update = (state, session) => {
  state.mins = session ? state.minsSession : state.minsBreak;
  state.secs = 0;
}


var interval;

export const playAsync = playing => dispatch => {
  if (playing) {
    interval = setInterval(() => {
      dispatch(displaySlice.actions.decrementSec());
    }, 1000);
  } else {
    clearInterval(interval);
  }
}

export const { changePlaying, incrementSession, decrementSession, incrementBreak, decrementBreak } = displaySlice.actions;

export default displaySlice.reducer;
