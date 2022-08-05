import styles from '../styles/Home.module.css';

export default function Home() {
  return (
   <div className={styles.homeContainer}>
    <div className={styles.layer}></div>
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer} />
      <div className={styles.descriptionContainer}>
        <h2 className={styles.hiContainer}>Hello I am</h2>
        <h1 className={styles.nameContainer}>Daniela Blanco</h1>
        <p>I’m a designer in love with animals, photography, painting and discovering new worlds and cultures.
          </p>
        </div>
    </div>
   </div>
  )
}
