import React from 'react';
import styles from './Tabs.module.css';

let Tabs = (props) => {
    return (
        <div className={styles.wrapper}>
            <button href="" className={`${styles.button} ${styles.left}`} onClick={props.sort}>Самый дешевый</button>
            <button href="" className={`${styles.button} ${styles.right}`}>Самый быстрый</button>
        </div>
    )
};

export default Tabs;