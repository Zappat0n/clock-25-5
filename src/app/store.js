import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../features/display/displaySlice';

export default configureStore({
  reducer: {
    display: displayReducer,
  },
});
