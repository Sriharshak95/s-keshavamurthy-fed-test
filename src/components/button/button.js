import React from 'react';
import styles from './button.module.css';
import loadIcon from '../../../images/refresh.png';

const LoadButton = ({children,...props}) =>{
    return (
        <button className={styles.loadButton} {...props}>
            <img className={styles.buttonIcon} src={loadIcon} alt="" />
            Load More
        </button>
    )
}

export default LoadButton;