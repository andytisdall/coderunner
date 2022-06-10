import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ActionType } from './action-types';

import reducers from './reducers';
import { initialState } from './initial-state';

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });
