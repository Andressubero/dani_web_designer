import MenuPopOver from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import styles from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
        <div className={styles.buttonContainer}>
          <MenuPopOver />
        </div>
        <Sidebar/>
        <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Layout;
