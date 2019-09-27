import React from 'react';
import styles from './Content.module.css'
import Filter from './Filter/Filter';
import Price from './Price/Price';

let Content = (props) =>{
    return(
        <div className={styles.wrapper}>
            <Filter filter={props.filter}/>
            <Price state={props.state.contentPage.airCard}
                   sort={props.sort}/>
        </div>
    )
};

export default Content;