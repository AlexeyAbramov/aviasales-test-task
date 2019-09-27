import React from 'react';
import styles from './Ticket.module.css';
import s7 from "./../../../../img/S7 Logo.png";
import Time from './Time/Time';

let Ticket = (props) => {
    let timeElements = props.airCardInfo
        .map(e => <Time cities={e.cities} time={e.time} way={e.way} transfer={e.transfer} transferCities={e.transferCities}/>);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.price}>{`${props.price} Р`}</div>
                <div className={styles.logo}><img src={s7} alt="ticket-logo"/></div>
            </div>
            {timeElements}
        </div>
    )
};

export default Ticket;