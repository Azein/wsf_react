import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import styles from './index.css';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  applyMiddleware(logger)
  
) 

class TestApp extends React.Component{
  render(){
    return(
      <h2  className={styles.header}>Render Test</h2>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <TestApp />
  </Provider>
  ,
  document.getElementById('app')
)
