import React from 'react';
import styles from './card.module.css';
import CardTitle from './cardtitle';

const CardHeader = (props) =>{
    return (
        <div className={styles['text-center']}>
            <img src={props.profilePicture} alt="profile Image" className={styles['mx-auto'] + " " + styles.cardImg} />
            <CardTitle>{props.title + " " + props.firstName + " " + props.lastName}</CardTitle>
        </div>
    )
}

export default CardHeader;