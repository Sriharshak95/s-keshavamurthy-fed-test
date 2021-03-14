import React from 'react';
import styles from './card.module.css';
import CardHeader from './cardheader';
import CardBody from './cardbody';

const Card = (props) => {
    return (
        <div className={styles.card + " " + styles['mx-auto']}>
            <div className={styles.cardBody}>
                <CardHeader 
                 profilePicture={props.picture.large}
                 title={props.name.title}
                 firstName={props.name.first}
                 lastName={props.name.last}
                />
                <CardBody
                 birthday={props.dob.date}
                 email={props.email}
                 phone={props.cell}
                 streetno={props.location.street.number}
                 streetname={props.location.street.name}
                />
            </div>
        </div>
    )
}

export default Card;