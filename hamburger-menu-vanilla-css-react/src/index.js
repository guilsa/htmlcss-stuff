import React from 'react'
import ReactDOM from 'react-dom';
import routes from './config/routes'
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' // middleware between action <-> reducer
import { combineReducers } from 'redux'

// Test counter Reducer (a noun)
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      console.log('new state', state);
      return { count: count + 1 }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter
})

// Redux store (I'm also using Redux DevTools to debug Redux state)
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

ReactDOM.render(
  <Provider store={store}>
  {routes}
  </Provider>,
  document.getElementById('root')
);
