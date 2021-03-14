import React from 'react';
import styles from './card.module.css';

const CardItem = (props) => {
    return (
        <div className={styles.cardItem}>
            <img src={props.profile} alt="icon" className={styles.iconCard} />
            {props.children}
        </div>
    )
}

export default CardItem;