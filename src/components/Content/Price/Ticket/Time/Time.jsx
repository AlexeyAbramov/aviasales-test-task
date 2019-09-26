import React from 'react';
import styles from './Time.module.css'

let Time = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.route}>
                <p className={styles.data}>MOW – HKT</p>
                <p className={styles.time}>10:45 – 08:00</p>
            </div>
            <div className={styles.length}>
                <p className={styles.duration}>В ПУТИ</p>
                <p className={styles.time}>21ч 15м</p>
            </div>
            <div className={styles.stops}>
                <p className={styles.transfer}>2 пересадки</p>
                <p className={styles.city}>HKG, JNB</p>
            </div>
        </div>
    )
};

export default Time;