import Link from 'next/link';
import Footer from '../footer/Footer';
import styles from './sidebar.module.css';
import { useRouter } from 'next/router';

const pages = [ 'About', 'Contact', 'Portfolio', 'Resume'];

const Sidebar = () => {
  const router = useRouter();
  const page = router.asPath;
  return (
    <div className={styles.sidebarContainer}>
       <h1 className={styles.nameContainer}>danu</h1>
     <div className={styles.menuContainer}>
      <div key={'0 - page'} className={page === '/' ? styles.currentPage : styles.menuItem}><Link href="/" >Home</Link></div>
      
    { pages.map((p) => {
        return (
        <div key={`${p} - page`} className={page === `/${p.toLocaleLowerCase()}` ? styles.currentPage : styles.menuItem}>
          <Link href={`/${p.toLocaleLowerCase()}`} >
            {p}
            </Link>
          </div>);
    })}
     </div>
     <div className={styles.footerContainer}>
      <Footer />
     </div>
    
    </div>
  )
}

export default Sidebar;
