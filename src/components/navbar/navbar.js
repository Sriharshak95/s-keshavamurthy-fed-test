import React from 'react';
import styles from './nav.module.css';

const NavBar = () =>{
    return (
        <nav className={styles.navbar}>
            <a className={styles.navlogo}>Profiler</a>
        </nav>
    )
}

export default NavBar;