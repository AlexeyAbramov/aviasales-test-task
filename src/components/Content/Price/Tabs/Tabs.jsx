import React from 'react';
import styles from './Tabs.module.css';

let Tabs = () =>{
    return(
        <div className={styles.wrapper}>
            <a href="" className={`${styles.button} ${styles.left}`}>Самый дешевый</a>
            <a href="" className={`${styles.button} ${styles.right}`}>Самый быстрый</a>
        </div>
    )
};

export default Tabs;