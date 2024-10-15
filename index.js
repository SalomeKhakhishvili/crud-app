import { combineReducers } from 'redux';
import itemsReducer from './itemsSlice';
import themeReducer from './themeSlice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  theme: themeReducer,
});
