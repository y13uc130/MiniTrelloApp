// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  });
};
