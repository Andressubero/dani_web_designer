import Form from "../src/components/form/Form";
import styles from '../styles/Contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.formPageContainer}>
      <div className={styles.formTitle}>
        <h2>Form Contact</h2>
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
    
  )
}

export default Contact;
