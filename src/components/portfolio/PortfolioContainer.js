import { useState, useEffect } from 'react';
import Card from './Portfolio.Card';
import projects from './projects.json'
import styles from './Portfolio.module.css'

const PortfolioContainer = () => {
    const categories = ['All', 'Photography', 'Video', 'Others'];
    const [state, setState] = useState('all');
    const [data, setData] = useState(projects);

    useEffect(() => {
        if (state === 'all'){
            setData(projects);
        } else {
            setData(projects.filter((p) => p.category === state));
        }
    }, [state])
    
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h2>Featured <strong>Portfolio</strong></h2>
        </div>
        <div className={styles.menuContainer}>
            {categories.map((item) => {
                return (<div key={item} onClick={()=> {setState(item.toLocaleLowerCase())}} className={styles.menuItem}>{item}</div>);
            })}
        </div>
        <div className={styles.projectsContainer}>
            {data.map((p) => {
                return (<Card url={p.url} key={p.name} img={p.imgUrl} description={p.description} category={p.category} title={p.name} />);
            })}
        </div>
    </div>
  )
}

export default PortfolioContainer;
