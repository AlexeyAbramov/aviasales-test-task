import React from 'react';
import styles from './Price.module.css';
import Tabs from './Tabs/Tabs';
import Ticket from './Ticket/Ticket';

let Price = (props) =>{
    let ticketEl = props.state.getPrice.
        map(e => <Ticket state={props.state} price={e.price}/> );
    return(
        <div className={styles.wrapper}>
            <Tabs/>
            {ticketEl}
        </div>
    )
};

export default Price;