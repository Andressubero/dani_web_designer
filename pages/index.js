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
        <p>I am A Blogger Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
    </div>
   </div>
  )
}
