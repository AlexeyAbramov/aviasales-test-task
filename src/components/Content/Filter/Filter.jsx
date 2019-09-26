import React from 'react';
import styles from './Filter.module.css';

let Filter = () =>{
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.quantityTitle}>Количество пересадок</h2>
            <ul className={styles.filter}>
                <li className={styles.filterItem}><label>Все</label><input type="checkbox"/></li>
                <li className={styles.filterItem}><input type="checkbox"/><label>Без пересадок</label></li>
                <li className={styles.filterItem}><input type="checkbox"/><label>1 пересадка</label></li>
                <li className={styles.filterItem}><input type="checkbox"/><label>2 пересадки</label></li>
                <li className={styles.filterItem}><input type="checkbox"/><label>3 пересадки</label></li>
            </ul>
        </div>
    )
};

export default Filter;