import React from 'react';
import styles from './Price.module.css';
import Tabs from './Tabs/Tabs';
import Ticket from './Ticket/Ticket';

let Price = (props) =>{
    let ticketEl = props.state.prices.
        map(e => e.price===undefined ? <Ticket airCardInfo={props.state.airCardInfo} price={e.price=0}/> :
                                       <Ticket airCardInfo={props.state.airCardInfo} price={e.price}/> );
    return(
        <div className={styles.wrapper}>
            <Tabs prices={props.state.prices}
                  sort={props.sort}/>
            {ticketEl}
        </div>
    )
};

export default Price;