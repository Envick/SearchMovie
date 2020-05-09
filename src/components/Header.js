import React from 'react';
import styles from './header.module.css'
function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="logo.jpg" alt=""/>
      </div>
      <div className={styles.nav}>
        <ul>
          <li><a href="#">New Films</a></li>
          <li><a href="#">All gallery</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Partnership</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Header