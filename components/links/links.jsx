import styles from './links.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import Link from 'next/link';
const Links = () => {

    return ( 
        <div className={styles.links}>
        <ul className={styles.linksContainer}>
        <Link className={styles.link} href="https://www.linkedin.com/in/manu-r-b08125219/">Linkedin<LinkedInIcon/></Link>
        <Link  className={styles.link} href="https://github.com/manu-r12">GitHub<GitHub/></Link>
        <Link className={styles.link} href="mailto:manurajbhar12@gmail.com">Mail<MailIcon/></Link>
        <Link className={styles.link} href="https://open.spotify.com/user/31i4bnc4eho2s2eurc7uvr5olgfq?si=19efc1340d8b435c">Spotify<HeadphonesIcon/></Link>
        </ul>
        </div>
     );
}
 
export default Links;