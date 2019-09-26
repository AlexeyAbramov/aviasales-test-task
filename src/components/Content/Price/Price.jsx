import React from 'react';
import styles from './Price.module.css';
import Tabs from './Tabs/Tabs';
import Ticket from './Ticket/Ticket';

let Price = () =>{
    return(
        <div className={styles.wrapper}>
            <Tabs/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </div>
    )
};

export default Price;