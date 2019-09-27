import React from 'react';
import styles from './Ticket.module.css';
import s7 from "./../../../../img/S7 Logo.png";
import Time from './Time/Time';

let Ticket = (props) => {

    let timeEl = props.state.getWay.map(e => <Time cities={e.cities} time={e.time} way={e.way} transfer={e.transfer} transferCities={e.transferCities}/>);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.price}>{props.price}</div>
                <div className={styles.logo}><img src={s7} alt="logo"/></div>
            </div>
            {timeEl}
        </div>
    )
};

export default Ticket;