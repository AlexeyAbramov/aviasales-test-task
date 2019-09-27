import React from 'react';
import styles from './Time.module.css'

let Time = (props) => {
    debugger
    return (
        <div className={styles.wrapper}>
            <div className={styles.route}>
                <p className={styles.data}>{`${props.cities[0]} - ${props.cities[1]}`}</p>
                <p className={styles.time}>{`${props.time[0]} - ${props.time[1]}`}</p>
            </div>
            <div className={styles.length}>
                <p className={styles.duration}>В ПУТИ</p>
                <p className={styles.time}>{`${props.way[0]}ч ${props.way[1]}м`}</p>
            </div>
            <div className={styles.stops}>
                <p className={styles.transfer}>{props.transfer} пересадки</p>
                <p className={styles.city}>{`${props.transferCities[0]}, ${props.transferCities[1]}`}</p>
            </div>
        </div>
    )
};

export default Time;