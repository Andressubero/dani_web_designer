import Sidebar from "../sidebar/Sidebar";
import styles from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
        <Sidebar/>
        <div>{children}</div>
    </div>
  )
}

export default Layout;
