import React from 'react';
import styles from './card.module.css';
import birthdayIcon from '../../../images/cake.png';
import envelopeIcon from '../../../images/envelope.png';
import phoneIcon from '../../../images/phone-call.png';
import mapIcon from '../../../images/placeholder.png';
import CardItem from './carditem';
import Moment from 'react-moment';

const CardBody = (props) =>{
    return (
        <div>
            <CardItem profile={birthdayIcon}>
                <Moment format="MM MMMM">
                    {props.birthday}
                </Moment>
            </CardItem>
            <div className={styles.cardItemBorder}></div>
            <CardItem profile={envelopeIcon}>
                <span>{props.email}</span>
            </CardItem>
            <div className={styles.cardItemBorder}></div>
            <CardItem profile={phoneIcon}>
                <span>{props.phone}</span>
            </CardItem>
            <div className={styles.cardItemBorder}></div>
            <CardItem profile={mapIcon}>
                <span>{props.streetno + ", " + props.streetname}</span>
            </CardItem>
        </div>
    )
}

export default CardBody;