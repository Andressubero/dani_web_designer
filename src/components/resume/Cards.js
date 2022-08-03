import styles from './Resume.module.css';

const Card = (props) => {
    const {company, description, title, date} = props;
  return (
    <div className={styles.cardContainer}>
        <div className={styles.dateContainer}>{date}</div>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.descriptionContainer}>{description}</div>
        <div className={styles.companyContainer}>{company}</div>
    </div>
  )
}

export default Card;