import React from 'react';
import styles from './Ticket.module.css';
import s7 from "./../../../../img/S7 Logo.png";
import Time from './Time/Time';

let Ticket = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.price}>13400 Р</div>
                <div className={styles.logo}><img src={s7} alt="logo"/></div>
            </div>
            <Time/>
            <Time/>
        </div>
    )
};

export default Ticket;