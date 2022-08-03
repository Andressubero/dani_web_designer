import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './Footer.module.css'

const items = [
    {
        name: 'facebook',
        icon: <FacebookRoundedIcon />,
    }
    ,
    {
        name:  'twitter',
        icon: <TwitterIcon />
    },
    {
        name: 'linkedin',
        icon: <LinkedInIcon />
    },
    {
        name:  'instagram',
        icon: <InstagramIcon />
    }
   
    
   
]

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        {items.map((i) => (
            <div className={styles.footerItem} key={i.name}>{i.icon}</div>
        ))}
    </div>
  )
};

export default Footer;
