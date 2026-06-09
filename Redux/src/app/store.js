import { configureStore } from '@reduxjs/toolkit'
import todoreducer from '../features/todo/todoSlice';

const store = configureStore({
  reducer: todoreducer
});

export default store;