/* eslint-disable @next/next/no-img-element */
import styles from './Portfolio.module.css';
import React from 'react'
import Link from 'next/link';

const Card = (props) => {

    const { img, category, title, description, url } = props;
  return (
        <div className={styles.cardContainer}>
            <div>
                <div className={styles.img}> <img src={img} alt={title} style={{width: '100%', height: '100%'}}></img></div>
                <div className={styles.category}>{category}</div>
                <a style={{ padding: 0}}href={url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.title}>{title}</div>
                </a>
                <div className={styles.description}>{description}</div>
            </div>
        </div>    
  )
}

export default Card;
