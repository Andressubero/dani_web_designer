/* eslint-disable @next/next/no-img-element */
import styles from './Portfolio.module.css';
import React from 'react'
import Link from 'next/link';

const Card = (props) => {

    const { img, category, title, description, url } = props;
  return (
    <Link href={url}> 
        <div className={styles.cardContainer}>
            <div>
                <div className={styles.img}> <img src={img} alt={title} style={{width: '100%', height: '100%'}}></img></div>
                <div className={styles.category}>{category}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    </Link>
    
  )
}

export default Card;
