import React from 'react';
import styles from './app.css';
import Navbar from '../navbar/navbar.js';

export default class App extends React.Component{
  render(){
    return(
      <div className={styles.app__container}>
        <Navbar />
      </div>
    )
  }
}