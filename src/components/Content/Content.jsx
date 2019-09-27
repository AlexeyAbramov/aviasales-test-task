import React from 'react';
import styles from './Content.module.css'
import Filter from './Filter/Filter';
import Price from './Price/Price';

let Content = (props) =>{
    return(
        <div className={styles.wrapper}>
            <Filter/>
            <Price state={props.state}/>
        </div>
    )
};

export default Content;