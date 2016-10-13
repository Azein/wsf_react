import React from 'react';
import styles from './navbar.css';

export default class Navbar extends React.Component{
  render(){
    return(
      <nav className={styles.navbar__container}>
        <div className={styles.navbar__link}>Главная → </div>
        <div className={styles.navbar__link}>Каталог → </div>
        <div className={styles.navbar__link+' '+styles.active}>Книги для дизайнеров</div>
      </nav>
    )
  }
}