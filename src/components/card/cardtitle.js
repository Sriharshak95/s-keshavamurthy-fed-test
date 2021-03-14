import React from 'react';
import styles from './card.module.css';

const CardTitle = (props) => <div className={styles.cardTitle}>{props.children}</div>;

export default CardTitle;