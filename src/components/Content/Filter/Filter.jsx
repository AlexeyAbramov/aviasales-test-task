import React from 'react';
import styles from './Filter.module.css';

let Filter = (props) =>{

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.quantityTitle}>Количество пересадок</h2>
            <ul className={styles.filter}>
                <li className={styles.filterItem} ><input type="checkbox" id="1" onClick={props.filterrino}/><label for="1">Все</label></li>
                <li className={styles.filterItem} ><input type="checkbox" id="2" onClick={props.filterNothing}/><label for="2" >Без пересадок</label></li>
                <li className={styles.filterItem} ><input type="checkbox" id="3" onClick={props.filterThree}/><label for="3" >1 пересадка</label></li>
                <li className={styles.filterItem} ><input type="checkbox" id="4" onClick={props.filterTwo}/><label for="4" >2 пересадки</label></li>
                <li className={styles.filterItem} ><input type="checkbox" id="5" onClick={props.filterOne}/><label for="5" >3 пересадки</label></li>
            </ul>
        </div>
    )
};

export default Filter;