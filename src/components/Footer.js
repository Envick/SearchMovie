import React from 'react';
import styles from './footer.module.css'
function Footer(props) {
  return(
    <div className={styles.container}>
      <p className={styles.footerText}>Developed by Amir Envick</p>
    </div>
  )
} 
export default Footer