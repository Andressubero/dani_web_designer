import styles from './Resume.module.css';
import Card from './Cards';
import education from './education.json';
import experiences from './experience.json';

const ResumeContainer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.section}>
            <div className={styles.sectionName}>Experience</div>
            <div className={styles.sectionContainer}>
                {education.map((e, i) => {
                    const {company, description, title, date} = e;
                    return (
                    <Card title={title} description={description} date={date} company={company} key={i} />
                );})}
            </div>
        </div>
       <div className={styles.section}>
            <div className={styles.sectionName}>Education</div>
            <div className={styles.sectionContainer}>
            {experiences.map((e, i) => {
                    const {company, description, title, date} = e;
                    return (
                    <Card title={title} description={description} date={date} company={company} key={i} />
                );})}
            </div>
       </div>
    </div>
  )
}

export default ResumeContainer;
