import React from 'react';
import styles from './Filter.module.css';

let Filter = () =>{
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.quantityTitle}>Количество пересадок</h2>
            <ul className={styles.filter}>
                <li className={styles.filterItem}><input type="checkbox" id="all"/><label for="all" >Все</label></li>
                <li className={styles.filterItem}><input type="checkbox" id="nothing"/><label for="nothing" >Без пересадок</label></li>
                <li className={styles.filterItem}><input type="checkbox" id="1"/><label for="1" >1 пересадка</label></li>
                <li className={styles.filterItem}><input type="checkbox" id="2"/><label for="2" >2 пересадки</label></li>
                <li className={styles.filterItem}><input type="checkbox" id="3"/><label for="3" >3 пересадки</label></li>
            </ul>
        </div>
    )
};

export default Filter;