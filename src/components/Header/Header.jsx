import React from 'react';
import logo from '../../img/Logo.png';
import styles from "./Header.module.css"

let Header = () =>{
    return(
        <div className={styles.wrapper}>
        <img src={logo} alt="header-logo" className={styles.logo}/>
        </div>
    )
};

export default Header;