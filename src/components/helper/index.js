import React from 'react';
import styles from './helper.module.css';

const Helper = (props) => {
    return (
        <div className={styles.helper}>
            {props.children}
        </div>
    )
};

export default Helper;